import React, { useState, useEffect } from 'react'
import 'antd/dist/antd.css';
import { Row, Col, Divider, Card } from 'antd';
import { fetchNews } from '../api';
import ReactHtmlParser from 'react-html-parser';
const { Meta } = Card;

const NewsSection = (request) => {
    const [newsSection, setNewsSection] = useState([]);


    useEffect(() => {
        const fetchAPI = async () => {
            setNewsSection(await fetchNews(request));
        };
        fetchAPI();
    }, [request]);

   

    return (
        <div>
            <center>
            <Row>
                <Col>
                    <h1 style={{ fontSize: '50px'}}>{request.topHeading}</h1>
                </Col>

            </Row>
            <Row>
                {newsSection.length > 1 ?
                    newsSection.map((article, key) =>
                        article.urlToImage === "" || article.urlToImage === null ? null :
                            <Col key={key} md={{ span: 6 }} sm={{ span: 24 }} >
                                
                                <Card onClick={() => window.open(article.url, "_blank")} type="inner" hoverable="true"
                                    style={{ width: 350, marginBottom: 20 }}
                                    cover={article.urlToImage === "" || article.urlToImage === null ? null :
                                        <img
                                            alt={article.title}
                                            src={article.urlToImage}
                                        />
                                    }
                                    title={article.source.name === "" || article.source.name === null ? null : "Fuente: " + ReactHtmlParser(article.source.name)}
                                    extra={article.author === "" || article.author === null ? null : "Autor: " + ReactHtmlParser(article.author)}
                                >
                                    <h3>{ReactHtmlParser(article.title)}</h3>
                                    <Meta
                                        description={ReactHtmlParser(article.description)}
                                    />
                                    
                                </Card>
                                
                            </Col>
                            
                    )
                    : "Cargando..."}
            </Row>
            {request.linkText != null ?
                <Row>
                    <Col>
                        <Divider />
                    </Col>
                </Row> : null}

                </center>
        </div>
    )
}

export default NewsSection;