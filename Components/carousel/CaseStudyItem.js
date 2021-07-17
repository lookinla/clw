import Link from 'next/link';
import styled from 'styled-components';
import { FaRegArrowAltCircleRight } from 'react-icons/fa';

const IContainer = styled.div`
  width: 300px;
  height: 550px;
  padding-left: 20px;
  padding-right: 20px;
  background: #ffffff;
  border: solid 1px #eeeeee;
  margin-right: 10px;
`;

const IContent = styled.div`
  height: 520px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const ITitle = styled.p`
  font-size: 22px;
  font-weight: bold;
`;
const IType = styled.p`
  color: #666666;
  font-size: 12px;
  font-weight: bold;
  padding: 3px 9px;
  border-radius: 10px;
  border: solid 2px #f6d85e;
  width: 70px;
  text-align: center;
  text-transform: capitalize;
`;

const IExcerpt = styled.p`
  font-size: 14px;
`;

const IImg = styled.img`
  width: 250px;
  height: 200px;
  margin: auto;
`;

const IBtn = styled.div`
  font-size: 16px;
  font-weight: bold;
  color: #333333;
  padding: 15px 30px;
  border: solid 2px #de632d;
  width: 180px;
  cursor: pointer;
`;

const IIcon = styled.div`
  font-size: 1.1rem;
  display: inline-block;
  vertical-align: middle;
  margin-right: 10px;
`;

const CaseStudyItem = ({ id, title, type, image, excerpt }) => {
  function createMarkup(iexcerpt) {
    return { __html: iexcerpt };
  }

  return (
    <IContainer>
      <IContent>
        <ITitle>{title}</ITitle>
        <IType>{type}</IType>
        <div className="csi-image">
          <IImg src={image} alt={title} />
        </div>
        <IExcerpt dangerouslySetInnerHTML={createMarkup(excerpt)}></IExcerpt>
        <Link as={`/posts/${type}/${id}`} href="/posts/[type]/[id]">
          <a>
            <IBtn>
              <IIcon>
                <FaRegArrowAltCircleRight />
              </IIcon>
              Read More
            </IBtn>
          </a>
        </Link>
      </IContent>
    </IContainer>
  );
};

export default CaseStudyItem;
