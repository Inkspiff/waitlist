import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import PaddedContainer from "@/components/layout/PaddedContainer";

const LIST = [
  {
    title: "120X FASTER",
    desc: "Hours of boring work done in seconds. Create and edit code docs in a snap.",
  },
  {
    title: "AUTOMATE EVERYTHING",
    desc: "Focus on your code, we will be updating your docs in realtime.",
  },
  {
    title: "SAVE RESOURCES",
    desc: "Don't spend money on code doc managment. Let us do the heavy lifting.",
  },
  {
    title: "ZERO LEARNING",
    desc: "No need to learn markdown or any other syntax. One click and you're done.",
  },
  {
    title: "DEDICATED DOCSPACE",
    desc: "A platform for all your code docs from all your projects. One place, all your docs.",
  },
];

const Features = () => {
  return (
    <Box
      sx={
        {
          // bgcolor: "rgba(233, 233, 234)",
        }
      }
    >
      <PaddedContainer>
        <Typography
          variant="h2"
          sx={{
            textAlign: "center",
            mt: 4,
          }}
        >
          Automate code documentation with AI
        </Typography>

        <Grid
          container
          spacing={3}
          sx={
            {
              // border: 1
            }
          }
        >
          {LIST.map((item, index) => {
            return (
              <Grid key={index} item xs={index === 1 || index === 2 ? 6 : 12}>
                <Paper
                  elevation={0}
                  sx={{
                    borderRadius: 2,
                    bgcolor: "action.hover",
                    p: 3,
                    height: "100%",
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{
                      textAlign:
                        index === 4 ? "right" : index === 0 ? "center" : "left",
                      mb: 1,
                    }}
                  >
                    {item.title}
                  </Typography>
                  <Typography
                    sx={{
                      textAlign:
                        index === 4 ? "right" : index === 0 ? "center" : "left",
                    }}
                  >
                    {item.desc}
                  </Typography>
                </Paper>
              </Grid>
            );
          })}
        </Grid>
      </PaddedContainer>
    </Box>
  );
};

export default Features;
