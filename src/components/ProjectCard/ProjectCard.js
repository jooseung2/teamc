import React from 'react';

import "rbx/index.css";
import { Box, Media, Image, Content, Level, Button, Icon, FontAwesomeIcon } from "rbx";
import StarRatings from 'react-star-ratings';

const renderRewards = (rewards) => {
    return "haha";
}

const ProjectCard = ({ project, companies }) => {
    return (
        <Box>
            <Media>
                <Media.Item align="left">
                    <Image.Container size={128}>
                        <Image
                            // alt="Image"
                            src={`data/${companies[project["company"]]["img"]}`}
                        />
                    </Image.Container>
                    <StarRatings
        
                        rating={project["ratingSum"] / project["ratingNumber"]}
                        starRatedColor="yellow"
                        starDimension="20px"
                        starSpacing="3px"
                        // changeRating={this.changeRating}
                        numberOfStars={5}
                        name='rating'
                    />

                </Media.Item>
                <Media.Item>
                    <Content>
                        <p>
                            <strong>{project["projectName"]}</strong> <small>
                                
                            {companies[project["company"]]["name"]}
                            </small> <br />
                            {project["projectDescription"]} <br />
                            {project["projectDuration"]} <br />
                            {project["difficulty"]} <br />
                            {project["rewards"]} <br />
                            <Button>Explore project</Button>
                        </p>
                    </Content>
                    {/* <Level breakpoint="mobile">
                        <Level.Item align="left">
                            <Level.Item as="a" aria-label="reply">
                                <Icon size="small">
                                    <FontAwesomeIcon icon={faReply} />
                                </Icon>
                            </Level.Item>
                            <Level.Item as="a" aria-label="retweet">
                                <Icon size="small">
                                    <FontAwesomeIcon icon={faRetweet} />
                                </Icon>
                            </Level.Item>
                            <Level.Item as="a" aria-label="like">
                                <Icon size="small">
                                    <FontAwesomeIcon icon={faHeart} />
                                </Icon>
                            </Level.Item>
                        </Level.Item>
                    </Level> */}
                </Media.Item>
            </Media>
        </Box>
    );
}

export default ProjectCard;
