import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Button, Card, Col, Container, Row} from "react-bootstrap";

const News = () => {

    const [News, setNews] = useState([])

    const getNews = async () => {
        const address = "https://newsapi.org/v2/everything?q=tesla&from=2023-03-19&sortBy=publishedAt&apiKey=4d991139f4ef4bcc8dc6cff0c1b0a93d";

        try {

            const res = await axios.get(address)
            setNews(res.data.articles)

        } catch (err) {
            console.log(err)
        }
    };

    useEffect(()=>{
        getNews()
    }, []);

    return (
        <Container>
            <Row>
                {News && News.map(article =>(
                    <Col className={"mt-5"}>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img
                                style={{height : "150px"}}
                                variant="top"
                                src={
                                    article.urlToImage
                                        ? article.urlToImage
                                        : require("../img/images.png")} />
                            <Card.Body>
                                <Card.Title>{`${article.title.slice(0, 40)}...`}</Card.Title>
                                <Card.Text>
                                    발행일 : {article.publishedAt}
                                </Card.Text>
                                <Card.Text>
                                    {article.content.slice(0, 150)}
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    ))}
            </Row>
        </Container>
    );
};

export default News;