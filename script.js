document.addEventListener("DOMContentLoaded", async () => {
  const imageElement = document.querySelector(".image");
  const quoteElement = document.querySelector(".quote");
  const nameElement = document.querySelector(".name");
  const professionElement = document.querySelector(".profession");
  const prevButton = document.querySelector(".prev");
  const nextButton = document.querySelector(".next");
  let testimonials = [];
  let currentIndex = 0;
  try {
    const response = await fetch("data.json");
    const data = await response.json();
    testimonials = data.testimonials;
  } catch (error) {
    console.error("Error loading testimonials:", error);
    return;
  }
  function updateTestimonial(index) {
    const testimonial = testimonials[index];
    document.querySelector(".quote__container").classList.add("fade-out");
    document.querySelector(".image__container").classList.add("fade-out");
    setTimeout(() => {
      imageElement.src = testimonial.image;
      quoteElement.textContent = `“ ${testimonial.quote} ”`;
      nameElement.textContent = testimonial.name;
      professionElement.textContent = testimonial.profession;
      document.querySelector(".quote__container").classList.remove("fade-out");
      document.querySelector(".image__container").classList.remove("fade-out");
    }, 500);
  }
  prevButton.addEventListener("click", () => {
    currentIndex =
      (currentIndex - 1 + testimonials.length) % testimonials.length;
    updateTestimonial(currentIndex);
  });
  nextButton.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % testimonials.length;
    updateTestimonial(currentIndex);
  });
  updateTestimonial(currentIndex);
});
