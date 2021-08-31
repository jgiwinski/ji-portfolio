import './WorkExp.scss'; 
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaMapMarkedAlt, FaLaptopCode,  FaHome, FaPlane, FaBed } from 'react-icons/fa'; 

export const WorkExp = () => {
    return (
        <section id='workexp'>
            <h2 className='section-title'>PROFESSIONAL EXPERIENCE</h2>
            <hr></hr>
            <VerticalTimeline>
                <VerticalTimelineElement
                    contentStyle={{ background: '#EAD7D7', color: '#000' }}
                    contentArrowStyle={{ borderRight: '7px solid  #EAD7D7' }}
                    date="Present"
                    iconStyle={{ background: '#6D466B', color: '#fff' }}
                    icon={<FaMapMarkedAlt />}
                >
                    <h3 className="pe-role">Software Engineer</h3>
                    <h4 className="pe-company"></h4>
                    {/* <ul>
                        <li></li>
                    </ul> */}
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    date="Feb 2021 - June 2021"
                    iconStyle={{ background: '#6D466B', color: '#fff' }}
                    icon={<FaLaptopCode />}
                >
                    <h3 className="pe-role">Member of Student Leadership </h3>
                    <h4 className="pe-company">Turing School of Software & Design</h4>
                    <ul>
                        <li>Led/Co-led weekly retros for a team of 25 students.</li>
                        <li>Acted as liaison between students and instructors, and mediated conversations between conflicted parties.</li>
                        <li>Became the main point of contact for struggling students with personal and/or technical challenges.</li>
                        <li>Fostered a culture of inclusion and constant support within the team.</li>
                        <li>Organized virtual activities to encourage students during their journey to become developers.</li>
                    </ul>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    date="May 2018 - Nov 2019"
                    iconStyle={{ background: '#6D466B', color: '#fff' }}
                    icon={<FaHome />}
                >
                    <h3 className="pe-role">Partner Success Manager/Analyst</h3>
                    <h4 className="pe-company">WanderJaunt Inc.</h4>
                    <ul>
                        <li>Created basic SQL queries to collect and analyze data to rebuild a cost effective and efficient Customer Experience schedule.</li>
                        <li>Analyzed individual service agent and team productivity - presented monthly to leadership.</li>
                        <li>Built out training and team processes for property partners and internal team.</li>
                        <li>Redesigned and implemented message, phone, chat, and tagging system for CX.</li>
                        <li>Created Customer Experience (CX) performance quality rubric.</li>
                    </ul>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    date="Aug 2015 - May 2018"
                    iconStyle={{ background: '#6D466B', color: '#fff' }}
                    icon={<FaPlane />}
                >
                    <h3 className="pe-role">Red Coat Customer Service Lead</h3>
                    <h4 className="pe-company">Delta Air Lines</h4>
                    <ul>
                        <li>Led and managed a team to meet and exceed station objectives.</li>
                        <li>Trained customer service representatives and gate operators.</li>
                        <li>Responsible for servicing the most challenging customer issues with care and empathy.</li>
                        <li>Managed aircraft turnarounds and coordinated the team to finish on time.</li>
                    </ul>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    date="Aug 2014 - Aug 2015"
                    iconStyle={{ background: '#6D466B', color: '#fff' }}
                    icon={<FaBed />}
                >
                    <h3 className="pe-role">Surprise & Delight Specialist</h3>
                    <h4 className="pe-company">Tuft & Needle</h4>
                    <ul>
                        <li>Mentored with founder to craft the brand voice and process for high touch customer communication.</li>
                        <li>Assisted in operations of the customer loyalty program with the goal to create memorable experiences.</li>
                    </ul>
                </VerticalTimelineElement>
            </VerticalTimeline>
        </section>
    )
}