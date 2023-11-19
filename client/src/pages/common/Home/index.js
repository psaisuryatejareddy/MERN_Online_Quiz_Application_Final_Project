import { Col, message, Row } from "antd";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllExams } from "../../../apicalls/exams";
import { HideLoading, ShowLoading } from "../../../redux/loaderSlice";
import PageTitle from "../../../components/PageTitle";
import { useNavigate } from "react-router-dom";
import '../../../stylesheets/quizfirstpage.css'

function Home() {
  const [exams, setExams] = React.useState([]);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.users);

  const getExams = async () => {
    try {
      dispatch(ShowLoading());
      const response = await getAllExams();
      if (response.success) {
        setExams(response.data);
      } else {
        // Handle error appropriately, e.g., display a message
      }
      dispatch(HideLoading());
    } catch (error) {
      dispatch(HideLoading());
      // Handle error appropriately, e.g., display a message
    }
  };

  useEffect(() => {
    getExams();
  }, []);

  const handleCardHover = (examId) => {
    // Handle card hover if needed
  };

  return (
    user && (
      <div>
        <PageTitle title={`Hi ${user.name}, Welcome to Online MERN Quiz App `} className='pagetitle' />
        <div className="divider"></div>
        <br />
        <Row gutter={[16, 16]}>
        {exams.map((exam, index) => (
            <Col span={8} key={exam._id}>
            <div className={`ag-courses_item ${exam.newExam ? 'new-exam' : ''}`}>
            <a
              href="#"
              className="ag-courses-item_link"
              onMouseOver={() => handleCardHover(exam._id)}
            >
              <div className={`ag-courses-item_bg bg-color-${(index % 6) + 1}`}></div>
                  <div className="ag-courses-item_title">{exam?.name}</div>
                  <div className="ag-courses-item_date-box">
                    <button
                      className="start-button primary-outlined-btn"
                      onClick={() => navigate(`/user/write-exam/${exam._id}`)}
                    >
                      Start Exam
                    </button>
                  </div>
                </a>
              </div>
            </Col>
          ))}
        </Row>
      </div>
    )
  );
}

export default Home;
