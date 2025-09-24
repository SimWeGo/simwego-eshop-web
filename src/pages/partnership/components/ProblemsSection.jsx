import React from "react";
import { Card, CardContent, Typography } from "@mui/material";
import Container from "../../../components/Container";
import problemsImage1 from "../../../assets/images/partnership/problems/women.png";
import problemsImage2 from "../../../assets/images/partnership/problems/piggybank.png";
import problemsImage3 from "../../../assets/images/partnership/problems/desoriented.png";

const ProblemsSection = () => {
  const problems = [
    {
      image: problemsImage1,
      title: "Peu fiable",
      description: "Wi-Fi public : pratique pour toi, parfait pour les hackers."
    },
    {
      image: problemsImage2,
      title: "Trop couteuses",
      description: "Poster un selfie à 60 € ?\nC'est le prix de l'oubli de sa eSIM."
    },
    {
      image: problemsImage3,
      title: "Trop complexe",
      description: "Perdre 1h pour une SIM ? L'eSIM prend 10 secondes."
    }
  ];

  return (
    <div className="w-full bg-white">
      <Container>
        <div className="p-12">
          <div className="text-center mb-16">
            <Typography variant="h3" component="h2" className="font-bold text-primary mb-4">
              Aujourd'hui, les voyageurs veulent être{" "}
              <span className="text-primary font-bold">connectés</span>
              <br />
              dès leur arrivée — mais les{" "}
              <span className="text-primary font-bold">solutions déçoivent.</span>
            </Typography>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {problems.map((problem, index) => (
              <Card key={index} className="h-full shadow-lg hover:shadow-xl transition-shadow">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={problem.image}
                    alt={problem.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="text-center p-6">
                  <Typography variant="h5" component="h3" className="font-bold text-primary mb-3">
                    {problem.title}
                  </Typography>
                  <Typography variant="body1" className="text-gray-600">
                    {problem.description.split('\n').map((line, i) => (
                      <span key={i}>
                        {line}
                        {i < problem.description.split('\n').length - 1 && <br />}
                      </span>
                    ))}
                  </Typography>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ProblemsSection;