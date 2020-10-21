import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Link from '@material-ui/core/Link'

import project1 from "../images/html-css-javascript-lg.jpg";
import project2 from "../images/html-css-javascript.jpg";
import project3 from "../images/javascript-fullstack.jpg";
import project4 from "../images/mern-stack.jpg";
import project5 from "../images/react-redux.jpg";
import project6 from "../images/react.png";
import Sorbonne from '../images/sorbonne.png'
import Sor from '../images/magazine-septembre-2020.webp'

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    background: "#233",
    height: "100%",
  },
  cardContainer: {
    maxWidth: 345,
    margin: "3rem auto",
  },
}));

const projects = [
  {
    name: "Sortez !",
    description: `Sortez.org est un média régional qui propose une solution dynamique et innovante sur le print et le web pour stimuler l’information événementielle et commerciale de Fréjus à Menton.`,
    image: Sor,
    title: "sortez ! ",
    link: "https://www.sortez.org/"
  },
  {
    name: "Sorbonne universit",
    description: `Sorbonne Université soutient sa communauté étudiante tout au long de sa formation.
    Au travers de ses nombreux dispositifs d'accompagnement, nous œuvrons à votre réussite et votre épanouissement personnel durant votre vie étudiante.`,
    image: Sorbonne,
    title: "sorbonne",
    link: "https://www.sorbonne-universite.fr/"
  },
 
];

const Portfolio = () => {
  const classes = useStyles();
  return (
    <Box component="div" className={classes.mainContainer}>
      <Grid container justify="center">
        {/* Projects */}
        {projects.map((project, i) => (
          <Grid item xs={12} sm={8} md={4} key={i}>
            <Card className={classes.cardContainer}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Project 1"
                  height="140"
                  image={project.image}
                />
                <CardContent>
                  <Typography variant="h5" gutterBottom>
                    {project.name}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    {project.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                  <Link href={project.link} target="_blank" size="small" color="primary">
                    {project.title}
                  </Link>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
      
    </Box>
  );
};

export default Portfolio;
