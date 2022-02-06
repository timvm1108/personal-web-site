import React, { useState } from "react";
import { Grid, Typography, Paper, Tabs, Tab, List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import BoldWord from "./BoldWord";
import ExperiencePanel from "./ExperiencePanel";
import Header from "./Header";
import { ArrowRight } from "@mui/icons-material";

const Experience = () => {
    const [value, setValue] = useState(0)

    const handleChange = (event, newValue) => {
        setValue(newValue)
    }

    return (
        <Grid container direction="column" justifyContent="center" alignItems="center" style={{minHeight: 'calc(100vh - 80px)'}}>
            <Grid item xs='auto' p={2}>
                <Header text="2. Experience"/>
                <Paper sx={{ flexGrow: 1, display: 'flex', maxWidth: 'md'}}>
                    <Tabs orientation="vertical" value={value} onChange={handleChange} sx={{minWidth: '90px', borderRight: 1, borderColor: "divider"}}>
                        <Tab wrapped label="Service Alberta"/>
                        <Tab wrapped label="EvMware"/>
                        <Tab wrapped label="University of Alberta"/>
                    </Tabs>
                    <ExperiencePanel value={value} index={0}>
                        <Typography variant="h6">
                            Full Stack Developer Intern at Service Alberta
                        </Typography>
                        <Typography variant="subtitle1" color="text.secondary">
                            Edmonton, AB / May 2021 - Present
                        </Typography>
                        <List>
                            <ListItem>
                                <ListItemIcon>
                                    <ArrowRight/>
                                </ListItemIcon>
                                <ListItemText>
                                    Intern with the Alberta Digital Services team in the Office of the Corporate Chief Information Officer.
                                </ListItemText>
                            </ListItem>
                            <ListItem>
                                <ListItemIcon>
                                    <ArrowRight/>
                                </ListItemIcon>
                                <ListItemText>
                                    Contribute to trusted Government services with millions of active users.
                                </ListItemText>
                            </ListItem>
                            <ListItem>
                                <ListItemIcon>
                                    <ArrowRight/>
                                </ListItemIcon>
                                <ListItemText>
                                    Work in a multi-disciplinary team with a veriety of tools such as <BoldWord word="JavaScript"/>, <BoldWord word="React"/>, <BoldWord word="Python"/>, and <BoldWord word="Selenium"/>.
                                </ListItemText>
                            </ListItem>
                        </List>
                    </ExperiencePanel>
                    <ExperiencePanel value={value} index={1}>
                    <Typography variant="h6">
                            Junior Software Developer at EvMware
                        </Typography>
                        <Typography variant="subtitle1" color="text.secondary">
                            Victoria, BC / May 2020 - Sept. 2020
                        </Typography>
                        <List>
                            <ListItem>
                                <ListItemIcon>
                                    <ArrowRight/>
                                </ListItemIcon>
                                <ListItemText>
                                    Developed <BoldWord word=".NET"/> SOAP and REST Web Services including Data Access Layer.
                                </ListItemText>
                            </ListItem>
                            <ListItem>
                                <ListItemIcon>
                                    <ArrowRight/>
                                </ListItemIcon>
                                <ListItemText>
                                    Designed necessary tables and stored procedures in <BoldWord word="Microsoft SQL Server"/>.
                                </ListItemText>
                            </ListItem>
                            <ListItem>
                                <ListItemIcon>
                                    <ArrowRight/>
                                </ListItemIcon>
                                <ListItemText>
                                    Worked and coordinated remotely using <BoldWord word="GitLab"/> with several other developers.
                                </ListItemText>
                            </ListItem>
                            <ListItem>
                                <ListItemIcon>
                                    <ArrowRight/>
                                </ListItemIcon>
                                <ListItemText>
                                    Deployed software through staging and production servers, troubleshooted issues during testing.
                                </ListItemText>
                            </ListItem>
                        </List>
                    </ExperiencePanel>
                    <ExperiencePanel value={value} index={2}>
                        <Typography variant="h6">
                            Resident Assistant at University of Alberta Residence Services
                        </Typography>
                        <Typography variant="subtitle1" color="text.secondary">
                            Edmonton, AB / Aug. 2019 - Apr. 2020
                        </Typography>
                        <List>
                            <ListItem>
                                <ListItemIcon>
                                    <ArrowRight/>
                                </ListItemIcon>
                                <ListItemText>
                                    Successfully led a group of about 50 high school students through their transition to university, enabling them to focus on their success.
                                </ListItemText>
                            </ListItem>
                            <ListItem>
                                <ListItemIcon>
                                    <ArrowRight/>
                                </ListItemIcon>
                                <ListItemText>
                                    Used strong interpersonal and leadership skills to develop and run programming that focuses on education and guidance. 
                                    Continuously provided support as well as crisis management using exceptional communication skills.
                                </ListItemText>
                            </ListItem>
                            <ListItem>
                                <ListItemIcon>
                                    <ArrowRight/>
                                </ListItemIcon>
                                <ListItemText>
                                    Worked as part of a cohesive team of Resident Assistants, and collectively led over 400 students.
                                </ListItemText>
                            </ListItem>
                        </List>

                    </ExperiencePanel>
                </Paper>
            </Grid>
        </Grid>
    )
}

export default Experience