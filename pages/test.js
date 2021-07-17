import { useState, useEffect } from 'react';

const ItemCarousel = () => {
  const [tempCaseStudies, setTempCaseStudies] = useState();
  const [caseStudies, setCaseStudies] = useState();
  const [dataFetched, setDataFetched] = useState(false);

  const fetchCaseStudies = async () => {
    let caseStudiesArr = [];

    const indoorRes = await fetch('https://elotive.com/wp-json/wp/v2/indoor');
    const indoorData = await indoorRes.json();

    caseStudiesArr.push(indoorData);

    const outdoorRes = await fetch('https://elotive.com/wp-json/wp/v2/outdoor');
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

  return (
    <>
      <div className="row-title"></div>
      <div className="row-sub-title"></div>

      <h1>{!caseStudies ? false : caseStudies[1].id}</h1>
    </>
  );
};

export default ItemCarousel;
