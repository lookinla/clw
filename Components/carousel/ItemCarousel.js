import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io';

import CaseStudyItem from './CaseStudyItem';

const Section = styled.div`
  width: 100%auto;
  background-color: #fafafa;
  padding-top: 50px;
  padding-bottom: 50px;
`;

const CSContainer = styled.div`
  width: 100%auto;
  display: flex;
  transition: 1s ease;
  margin: auto;
`;

const CSContent = styled.div`
  width: 80%;
  margin: auto;
  max-width: 930px;
  overflow: hidden;
`;

const CSRowTitle = styled.p`
  font-size: 34px;
  color: #de632d;
  text-align: center;
  margin-bottom: 20px;
`;

const CSRowSubTitle = styled.p`
  font-size: 24px;
  color: #333333;
  text-align: center;
  width: 50%;
  max-width: 680px;
  margin: auto;
  margin-bottom: 50px;
`;

const CSArrows = styled.div`
  font-size: 24px;
  width: 80%;
  max-width: 930px;
  display: flex;
  margin: 20px auto;
`;

const ArrowIcon = styled.div`
  height: 23px;
  width: 20px;
  margin-right: 10px;
  cursor: pointer;
  &:hover {
    color: #de632d;
  }
`;

const ItemCarousel = () => {
  const [tempCaseStudies, setTempCaseStudies] = useState();
  const [caseStudies, setCaseStudies] = useState();
  const [dataFetched, setDataFetched] = useState(false);
  const [count, setCount] = useState(0);
  const [translateX, setTranslateX] = useState(0);

  const fetchCaseStudies = async () => {
    let caseStudiesArr = [];

    const indoorRes = await fetch(
      'https://elotive.com/wp-json/wp/v2/indoor?_embed'
    );
    const indoorData = await indoorRes.json();

    caseStudiesArr.push(indoorData);

    const outdoorRes = await fetch(
      'https://elotive.com/wp-json/wp/v2/outdoor?_embed'
    );
    const outdoorData = await outdoorRes.json();

    caseStudiesArr.push(outdoorData);

    setTempCaseStudies(caseStudiesArr);
  };

  useEffect(() => {
    if (dataFetched) return;

    fetchCaseStudies();

    setDataFetched(true);
  }, [dataFetched]);

  useEffect(() => {
    if (!dataFetched || !tempCaseStudies || caseStudies) return;

    let tempCaseStudiesArr = [];

    for (let outterArr = 0; outterArr < tempCaseStudies.length; outterArr++) {
      for (
        let innerArr = 0;
        innerArr < tempCaseStudies[outterArr].length;
        innerArr++
      ) {
        tempCaseStudiesArr.push(tempCaseStudies[outterArr][innerArr]);
      }
    }

    console.log(tempCaseStudiesArr);

    setCaseStudies(tempCaseStudiesArr);
  }, [dataFetched, tempCaseStudies]);

  const createMarkup = () => {
    return { __html: caseStudies[1].content.rendered };
  };

  return (
    <Section>
      <CSRowTitle>Case Studies</CSRowTitle>
      <CSRowSubTitle>
        Next Generation LED Grow Lights, High Efficiency Greenhouse Lighting &
        Indoor Growing Lights
      </CSRowSubTitle>

      <CSContent>
        {!caseStudies ? (
          false
        ) : (
          <CSContainer style={{ transform: `translateX(${translateX}px)` }}>
            {' '}
            {caseStudies.map((csi) => (
              <CaseStudyItem
                key={csi.id}
                id={csi.id}
                image={csi['_embedded']['wp:featuredmedia']['0'].source_url}
                title={csi.title.rendered}
                type={csi.type}
                excerpt={csi.excerpt.rendered}
              />
            ))}
          </CSContainer>
        )}
      </CSContent>

      {!caseStudies ? (
        false
      ) : (
        <CSArrows>
          <ArrowIcon>
            <IoIosArrowBack
              onClick={() => {
                if (count - 1 < 0) {
                  setCount(caseStudies.length - 1);
                  setTranslateX((caseStudies.length - 1) * -310);
                } else {
                  setCount(count - 1);
                  setTranslateX(translateX + 310);
                }
              }}
            />
          </ArrowIcon>
          <ArrowIcon>
            <IoIosArrowForward
              onClick={() => {
                if (count + 1 >= caseStudies.length) {
                  setCount(0);
                  setTranslateX(0);
                } else {
                  setCount(count + 1);
                  setTranslateX(translateX - 310);
                }
              }}
            />
          </ArrowIcon>
        </CSArrows>
      )}
    </Section>
  );
};

export default ItemCarousel;
