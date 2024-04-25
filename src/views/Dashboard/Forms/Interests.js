import {
  Box,
  Divider,
  FormControl,
  FormControlLabel,
  FormHelperText,
  FormLabel,
  Grid,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from "@mui/material";
import { Fragment } from "react";

const Interests = (props) => {
  const { formik } = { ...props };

  const interestsSection = [
    {
      description:
        "What activities or hobbies do you find yourself naturally drawn to or passionate about?",
      questions: [
        {
          question:
            "Outdoor activities such as hiking, gardening, or playing sports",
          type: 1,
        },
        {
          question:
            "Creative pursuits like painting, writing, or playing musical instruments",
          type: 1,
        },
        {
          question:
            "Analytical activities such as solving puzzles, coding, or data analysis",
          type: 1,
        },
        {
          question:
            "Social activities like volunteering, organizing events, or mentoring",
          type: 1,
        },
        {
          question: "DIY projects, crafting, or cooking and baking",
          type: 1,
        },
      ]
    },
    {
      description:
        "When you have free time, how do you typically choose to spend it?",
      questions: [
        {
          question: "Reading books, articles, or blogs on various topics",
          type: 1,
        },
        {
          question: "Watching movies, documentaries, or online videos",
          type: 1,
        },
        {
          question:
            "Engaging in physical activities like going to the gym, yoga, or cycling",
          type: 1,
        },
        {
          question:
            "Exploring new places, traveling, or trying out new restaurants",
          type: 1,
        },
        {
          question:
            "Relaxing at home, listening to music, or practicing mindfulness and meditation",
          type: 1,
        },
      ]
    },
    {
      description:
        "Are there any specific subjects or topics that you enjoy learning about or discussing?",
      questions: [
        {
          question:
            "Science and technology, including biology, astronomy, or computer science",
          type: 1,
        },
        {
          question: "History, anthropology, or cultural studies",
          type: 1,
        },
        {
          question: "Psychology, sociology, or human behavior",
          type: 1,
        },
        {
          question: "Business, economics, or entrepreneurship",
          type: 1,
        },
        {
          question: "Environmental studies, sustainability, or ecology",
          type: 1,
        },
      ]
    },
    {
      description:
        "What types of tasks or projects do you excel in or feel most confident completing?",
      questions: [
        {
          question: " Organizing and planning events, schedules, or projects",
          type: 1,
        },
        {
          question:
            "Problem-solving and troubleshooting technical issues or complex problems",
          type: 1,
        },
        {
          question: "Writing, editing, or communicating ideas effectively",
          type: 1,
        },
        {
          question:
            "Leading and motivating teams or groups toward a common goal",
          type: 1,
        },
        {
          question:
            "Researching, analyzing data, and drawing insights or conclusions",
          type: 1,
        }
      ]
    },
    {
        description:
          "Think about a time when you were completely absorbed in an activity. What were you doing?",
        questions: [
          {
            question: "Designing or building something from scratch, like a piece of furniture or a website",
            type: 1,
          },
          {
            question:
              "Solving a challenging problem or puzzle, like a Rubik's cube or a Sudoku",
            type: 1,
          },
          {
            question: "Engaging in a deep conversation or debate with friends or colleagues",
            type: 1,
          },
          {
            question:
              "Participating in a competitive sport or game that required focus and strategy",
            type: 1,
          },
          {
            question:
              "Immersing yourself in a creative endeavor, like writing a story or composing music",
            type: 1,
          }
        ]
      },
      {
        description:
          "Do you prefer working independently or as part of a team? Why?",
        questions: [
          {
            question: "I prefer working independently because I can set my own pace and focus without distractions.",
            type: 1,
          },
          {
            question:
              " I enjoy working in small teams where I can collaborate closely with others and bounce ideas off each other.",
            type: 1,
          },
          {
            question: "I thrive in large team environments where there's diversity of thought and ample opportunity for brainstorming.",
            type: 1,
          },
          {
            question:
              "I like a balance of both independent work and teamwork, depending on the task at hand.",
            type: 1,
          },
          {
            question:
              "I don't have a strong preference; I adapt my working style based on the situation and requirements.",
            type: 1,
          }
        ]
      },
      {
        description:
          "What kinds of environments or settings do you feel most comfortable and productive in?",
        questions: [
          {
            question: "A quiet and organized workspace with minimal distractions",
            type: 1,
          },
          {
            question:
              "An open and collaborative office environment with plenty of interaction",
            type: 1,
          },
          {
            question: "A dynamic and fast-paced environment where things are constantly changing",
            type: 1,
          },
          {
            question:
              "A remote or virtual setting where I can work from anywhere with flexibility",
            type: 1,
          },
          {
            question:
              "A structured environment with clear expectations and routines",
            type: 1,
          }
        ]
      },
      {
        description:
          "Reflect on past experiences. What aspects of previous jobs, internships, or volunteer opportunities did you enjoy the most?",
        questions: [
          {
            question: " Interacting with customers, clients, or stakeholders and providing excellent service",
            type: 1,
          },
          {
            question:
              "Being given autonomy and freedom to take ownership of projects or initiatives",
            type: 1,
          },
          {
            question: "Learning new skills or technologies and applying them to real-world situations",
            type: 1,
          },
          {
            question:
              "Collaborating with colleagues or team members to achieve common goals",
            type: 1,
          },
          {
            question:
              "Making a positive impact on the community, environment, or society through meaningful work",
            type: 1,
          }
        ]
      },
      {
        description:
          "Are there any role models or individuals whose careers you admire or aspire to emulate?",
        questions: [
          {
            question: "Elon Musk, for his innovation and entrepreneurial spirit in multiple industries",
            type: 1,
          },
          {
            question:
              "Michelle Obama, for her advocacy work and commitment to education and social issues",
            type: 1,
          },
          {
            question: "Stephen Hawking, for his groundbreaking contributions to theoretical physics and cosmology",
            type: 1,
          },
          {
            question:
              "Oprah Winfrey, for her media empire and philanthropic endeavors",
            type: 1,
          },
          {
            question:
              "Malala Yousafzai, for her activism and advocacy for girls' education and human rights",
            type: 1,
          }
        ]
      },
      {
        description:
          "If money were not a factor, how would you choose to spend your time in terms of work or activities?",
        questions: [
          {
            question: "Pursuing a passion project or hobby full-time, such as writing, painting, or starting a nonprofit",
            type: 1,
          },
          {
            question:
              "Traveling the world and experiencing different cultures, languages, and cuisines",
            type: 1,
          },
          {
            question: "Investing in further education or personal development to continuously learn and grow",
            type: 1,
          },
          {
            question:
              "Volunteering or giving back to the community through charitable work or mentoring",
            type: 1,
          },
          {
            question:
              "Spending quality time with loved ones and focusing on personal well-being and fulfillment",
            type: 1,
          }
        ]
      }

  ];

  return (
    <Box>
      {interestsSection.map((section, index) => {
        return (
          <Box sx={{ pt: "50px", pl: "50px" }} key={index}>
            <Typography variant="h5">{index+1}. {section.description}</Typography>
            {section.questions.map((questionItem, qindex) => {
              return (
                <Box key ={qindex} sx={{ pt: "20px" }}>
                  {questionItem.type === 1 ? (
                    <Box sx={{ pt: "10px" }}>
                      <FormControl sx={{ width: "100%" }}>
                        <Grid container spacing={0}>
                          <Grid item xs={5}>
                            <Typography sx={{ pl: "15px" }} variant="body1">
                              {qindex + 1}. {questionItem.question}
                            </Typography>
                          </Grid>
                          <Grid item xs={6}>
                            <RadioGroup
                              aria-labelledby="demo-radio-buttons-group-label"
                              name="radio-buttons-group"
                              row
                              sx={{ scale: "0.85" }}
                            >
                              <FormControlLabel
                                value="1"
                                control={<Radio />}
                                label="Strongly Disagree"
                                labelPlacement="top"
                              />
                              <FormControlLabel
                                value="2"
                                control={<Radio />}
                                label="Disagree"
                                labelPlacement="top"
                              />
                              <FormControlLabel
                                value="3"
                                control={<Radio />}
                                label="Neither Agree Nor Disagree"
                                labelPlacement="top"
                              />
                              <FormControlLabel
                                value="4"
                                control={<Radio />}
                                label="Agree"
                                labelPlacement="top"
                              />
                              <FormControlLabel
                                value="5"
                                control={<Radio />}
                                label="Strongly Agree"
                                labelPlacement="top"
                              />
                            </RadioGroup>
                          </Grid>
                        </Grid>
                      </FormControl>
                    </Box>
                  ) : null}
                </Box>
              );
            })}
            {index === interestsSection.length - 1 ? null : <Divider />}
          </Box>
        );
      })}
    </Box>
  );
};

export default Interests;
