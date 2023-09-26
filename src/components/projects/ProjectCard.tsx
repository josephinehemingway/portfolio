import React from "react";
import { StyledPara, StyledText } from "../reusable/Styles";
import "./Projects.css";
import { Carousel, Image } from "antd";
import {RightOutlined, LeftOutlined} from '@ant-design/icons';

type Props = {
    title: string;
    imgUrls: string[];
    desc: string;
};

const ProjectCard: React.FC<Props> = ({ title, imgUrls, desc }) => {
    return (
        <div className="projectCard">
            <Image.PreviewGroup>
                <Carousel
                    style={{ width: "700px" }}
                    autoplay
                    arrows
                    nextArrow={<RightOutlined />}
                    prevArrow={<LeftOutlined />}
                >
                    {imgUrls.map((url, index) => (
                        <Image
                            key={index}
                            className="projectImg"
                            src={url}
                            alt=""
                            style={{ marginRight: "1rem" }}
                        />
                    ))}
                </Carousel>
            </Image.PreviewGroup>

            <div className="projectDetails">
                <StyledText margintop={'0.5rem'}>{title}</StyledText>
                <StyledPara>{desc}</StyledPara>
                {/*TODO: Add button to link to project*/}
                {/*TODO: Add tech stack*/}
                {/*TODO: Find a font*/}
                {/*TODO: add image carousel for images and ability to preview image */}
            </div>
        </div>
    );
};

export default ProjectCard;
