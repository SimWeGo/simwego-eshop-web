"use client"

import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Container from "../../../components/Container";
import menTestimonial from "../../../assets/images/landing/testimonial/men.png";
import womenTestimonial from "../../../assets/images/landing/testimonial/women.png";

const testimonialsList = [
  {
    content: "1 minute pour acheter, et j'avais Internet en sortant de l'avion – super pratique !",
    author: "Marie D.",
    avatar: "MD",
    avatarImage: womenTestimonial,
    location: "Tokyo",
    rating: 5
  },
  {
    content: "Pas besoin de chercher un magasin de SIM, tout est prêt avant le départ.",
    author: "Julien P.",
    avatar: "JP",
    avatarImage: menTestimonial,
    location: "New York",
    rating: 5
  },
  {
    content: "Service client excellent et connexion stable partout en Europe. Je recommande !",
    author: "Lucas M.",
    avatar: "LM",
    avatarImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    location: "Madrid",
    rating: 5
  },
  {
    content: "Fini les frais de roaming exorbitants ! Parfait pour mes voyages d'affaires.",
    author: "Sophie L.",
    avatar: "SL",
    avatarImage: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    location: "Londres",
    rating: 4
  },
  {
    content: "Installation super simple, même pour quelqu'un qui n'est pas très tech comme moi !",
    author: "Pierre R.",
    avatar: "PR",
    avatarImage: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    location: "Rome",
    rating: 5
  }
];

const TestimonialSection = () => {
  // Fonction pour afficher les étoiles selon la note
  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    
    // Étoiles pleines
    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <svg
          key={`full-${i}`}
          className="w-4 h-4 text-yellow-400 fill-current"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      );
    }
    
    // Demi-étoile si nécessaire
    if (hasHalfStar) {
      stars.push(
        <svg
          key="half"
          className="w-4 h-4 text-yellow-400 fill-current"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      );
    }
    
    // Étoiles vides pour compléter jusqu'à 5
    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <svg
          key={`empty-${i}`}
          className="w-4 h-4 text-gray-300"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      );
    }
    
    return stars;
  };

  return (
    <section className="py-16 sm:py-20 md:py-24 bg-gray-50">
      <Container>
        <div className="px-4 text-center">
          <h2 className="text-lg text-primary mb-2 tracking-wider">
            Témoignages
          </h2>

          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ce que nos clients disent
          </h2>

          <h3 className="max-w-2xl mx-auto text-lg sm:text-xl text-gray-600 mb-12 sm:mb-16">
            Des milliers de voyageurs nous font confiance partout dans le monde.
          </h3>
        </div>

        <div className="w-full max-w-6xl mx-auto px-4">
          <Carousel 
            opts={{ 
              align: "start",
              loop: true 
            }}
            className="w-full"
          >
            <CarouselContent>
              {testimonialsList.map((testimonial, index) => (
                <CarouselItem key={index} className="basis-full sm:basis-1/2 lg:basis-1/3 pl-4">
                  <Card className="h-full flex flex-col bg-white hover:shadow-lg transition-all duration-300 min-h-[280px] sm:min-h-[320px] lg:min-h-[350px]">
                    <CardContent className="p-6 sm:p-8 lg:p-10 flex flex-col flex-grow">
                      <div className="flex justify-between items-center mb-4">
                        <svg
                          className="w-6 h-6 text-primary"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z" />
                        </svg>
                        <div className="flex">
                          {renderStars(testimonial.rating)}
                        </div>
                      </div>
                      
                      {/* Contenu du témoignage */}
                      <p className="text-gray-700 mb-auto flex-grow text-xl leading-relaxed font-medium">"{testimonial.content}"</p>
                      
                      {/* Informations de l'utilisateur en bas */}
                      <div className="flex items-center mt-6 pt-4 border-t border-gray-200">
                        <Avatar className="h-14 w-14 mr-4 bg-primary/20">
                          {testimonial.avatarImage ? (
                            <AvatarImage 
                              src={testimonial.avatarImage} 
                              alt={`Photo de ${testimonial.author}`} 
                            />
                          ) : (
                            <AvatarFallback className="text-primary font-medium">
                              {testimonial.avatar}
                            </AvatarFallback>
                          )}
                        </Avatar>
                        <div>
                          <p className="font-bold text-xl">{testimonial.author}</p>
                          <p className="text-gray-600 text-lg">{testimonial.location}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center mt-8">
              <CarouselPrevious className="static mr-2 translate-y-0" />
              <CarouselNext className="static ml-2 translate-y-0" />
            </div>
          </Carousel>
        </div>
      </Container>
    </section>
  );
};

export default TestimonialSection;