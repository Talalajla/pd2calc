import React, { useEffect, useState } from "react";
import { CarouselContainer, CarouselContent } from "../styles/carousel";
import { Btn, Controls, Position } from "../styles/carousel";
import left from "../images/left-arrow.svg";
import right from "../images/right-arrow.svg";
import { Description, DescriptionItem, TutSubTitle, TutSubTitleItem } from "../styles/tutorial";

const Carousel = props => {
    const subtitles = [];
    const images = [];
    const descriptions = [];
    props.children.forEach(item => {
        subtitles.push(item.props.children[0])
        images.push(item.props.children[1])
        descriptions.push(item.props.children[2])
    });

    const [index, setIndex] = useState(0);
    const length = images.length;


    const goNext = () => {
        if (index < length - 1) setIndex(prevState => prevState + 1);
    }

    const goPrev = () => {
        if (index > 0) setIndex(prevState => prevState - 1);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const checkKey = (e) => {
        if (e.keyCode === 37) goPrev()
        else if (e.keyCode === 39) goNext()
    }

    useEffect(() => {
        window.addEventListener('keydown', checkKey);
        return () => {window.removeEventListener('keydown', checkKey);}
    }, [checkKey]);

    return(
        <>
        <TutSubTitle>
            <TutSubTitleItem style={{ transform: `translateX(-${index * 100}%)` }}>
                {subtitles}
            </TutSubTitleItem>
        </TutSubTitle>
        <Controls>
            <Btn onClick={goPrev}>
                <img src={left} alt="left control arrow" style={{
                    filter: `${ index === 0 ? "invert(23%) sepia(21%) saturate(0%) hue-rotate(264deg) brightness(97%) contrast(87%)" : "" }`,
                    cursor: `${ index === 0 ? "default" : "pointer"}`
                }}/>
            </Btn>
            <Position>
                {index + 1}/{images.length}
            </Position>
            <Btn onClick={goNext}>
                <img src={right} alt="right control arrow" style={{
                    filter: `${ index === length - 1 ? "invert(23%) sepia(21%) saturate(0%) hue-rotate(264deg) brightness(97%) contrast(87%)" : "" }`,
                    cursor: `${ index === length - 1 ? "default" : "pointer"}`   
                }}/>
            </Btn>
        </Controls>
        <CarouselContainer>
            <CarouselContent style={{ transform: `translateX(-${index * 100}%)` }}>
                {images}
            </CarouselContent>
        </CarouselContainer>
        <Description>
            <DescriptionItem style={{ transform: `translateX(-${index * 100}%)` }}>
                {descriptions}
            </DescriptionItem>
        </Description>

        </>
    );
} 

export default Carousel;