import React from "react";
import "./SkillList.css";
import { List, ListItem, ListIcon, Container, Box, Heading } from "@chakra-ui/react";
import { MdSettings, MdCheckCircle } from "react-icons/md";
import { ImSmile2 } from "react-icons/im";

const SkillList = () => {
  return (
    <section className="skill-list">
      <div className="section-head">
        <h6 className="text-center">View My Skills</h6>
        <h2 className="text-center">Skills</h2>
        <div className="underline"></div>
      </div>
      <div className="row">
        <div className="col-md-10 mx-auto">
          {/* Tech Skills*/}
          <Heading as="h5" size="sm">Tech Skills</Heading>
          <Container maxW="2xl" centerContent="true" margin="auto">
            <Box padding="4" maxW="auto" centerContent="ture">
              <List spacing={3}>
                <ListItem>
                  <ListIcon as={ImSmile2} color="green.500" />
                  Front-End Development: React.js, Tailwind, CSS3, HTML5,
                  JavaScript, React Context
                </ListItem>
                <ListItem>
                  <ListIcon as={ImSmile2} color="green.500" />
                  Database design and management: MySQL
                </ListItem>
                <ListItem>
                  <ListIcon as={ImSmile2} color="green.500" />
                  Coding Languages: CSS3, HTML5, JavaScript, Python, SQL
                </ListItem>
                {/* You can also use custom icons from react-icons */}
                <ListItem>
                  <ListIcon as={ImSmile2} color="green.500" />
                  Tool: VSCode, Visual Studio
                </ListItem>
              </List>
            </Box>
          </Container>

          <h3>UX Skills</h3>
          <Container maxW="2xl" centerContent="true" margin="auto">
            <Box padding="4" maxW="auto" centerContent="ture">
              <List spacing={3}>
                <ListItem>
                  <ListIcon as={ImSmile2} color="green.500" />
                  Design Process: Conceptual Design, Interaction Design
                </ListItem>
                <ListItem>
                  <ListIcon as={ImSmile2} color="green.500" />
                  Prototyping software:Figma, Mockups
                </ListItem>
                <ListItem>
                  <ListIcon as={ImSmile2} color="green.500" />
                  Coding Languages: CSS3, HTML5, JavaScript, Python, SQL
                </ListItem>
                {/* You can also use custom icons from react-icons */}
              </List>
            </Box>
          </Container>

          <h3>Teamwork Skill</h3>
          <Container maxW="2xl" centerContent="true" margin="auto">
            <Box padding="4" maxW="auto" centerContent="ture">
              <List spacing={3}>
                <ListItem>
                  <ListIcon as={ImSmile2} color="green.500" />
                  Tool: Git, Github, Trello, Jira, MicrsoftTeams
                </ListItem>

                {/* You can also use custom icons from react-icons */}
              </List>
            </Box>
          </Container>
          {/* <p>
            • Front-End Development: React.js, Redux, Redux-Saga, CSS3, Sass,
            Less, HTML5, Pug(Jade), JavaScript, AJAX, React Context API, React
            Hooks, Ant.design, Bootstrap, Materialize, Semantic UI, Responsive
            design, Webpack, ES6
          </p> */}
          {/* <p>
            • Back-End Development: Node.js, ExpressJS, Mongoose, RESTful API,
            KeystoneJS, PHP, CodeIgniter
          </p>
          <p>• Database design and management: MySQL, MongoDB</p>
          <p>
            • Coding Languages: CSS3, HTML5, JavaScript, Python, SQL, PHP,
            MATLAB
          </p>
          <p> */}
            {/* • Machine learning: PyTorch, TensorFlow, Pythonic libraries (NumPy,
            Panda, Scikit-learn etc), OpenCV, Weka
          </p>
          <p>• Tool: VSCode, Visual Studio, Eclipse, Jupyter Notebook</p>
          <p>• Cloud: AWS S3, EC2, Heroku, MongoDB Atlas</p>
          {/* UX Skills */}
          {/* <h3>UX Skills</h3>
          <p>• Design Process: Conceptual Design, Interaction Design</p>
          <p>
            • Prototyping software:Photoshop, Illustrator, Mockplus, Balsamiq
            Mockups
          </p>
          <p> */}
            {/* • Testing: TAM, SUS, Time on Task, A/B testing, Cognitive
            walkthrough, Heuristic evaluation
          </p>  */}
          {/*Teamwork Skills */}
          {/* <h3>Teamwork Skills</h3>
          <p>• Tool: Git, Github, Trello, Bitbucket, Jira</p>
          <p>• Methodology: Agile, Scrum</p> */}
        </div>
      </div>
    </section>
  );
};

export default SkillList;
