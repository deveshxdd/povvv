import React from "react";
import useActive from "@/hooks/useActive";

const ServiceDetail = () => {
  const ref = useActive("/ServicesDetail");

  return (
    <div >
      <h1 className="servicesdetails">Content Marketing:</h1>
      <p>We specialize in crafting viral content campaigns from inception to execution. Starting
with ideation, we meticulously script, shoot (if applicable), and edit content to perfection
before uploading. Our approach ensures organic reach, having already garnered over
75 million views for our clients. (Add video and 3D elements/animations; Developer
note: Include video and interactive elements to showcase the content creation process.)
Performance Marketing:
Our performance marketing strategies leverage Meta ads and Google ads to craft
targeted campaigns on social media platforms. We drive inorganic traffic to achieve
desired outcomes, whether it’s generating leads or increasing profile visits. Our proven
track record includes helping clients achieve a 70% increase in leads with a 57%
reduction in Cost Per Lead (CPL). (Add video and interactive elements to showcase ad
campaigns and results; Developer note: Include video testimonials and interactive
charts/graphs to highlight performance metrics.)</p>
<h1 className="servicesdetails">Social Media Management:</h1>
<p>With our social media management services, we take charge of our clients’ social media
accounts to enhance their engagement with the audience. We ensure timely and
strategic uploads across social media platforms to maximize results and audience
interaction. (Add video and 3D elements/animations; Developer note: Include video
demonstrations of social media management tools and interactive elements showcasing
engagement metrics.)
Public Relations (PR):
Our PR services guarantee a reach of 100 million+ on Instagram within the shortest
time possible. By becoming the coolest trend on the internet, you’ll capture the attention
of millions and be seen as a new and trending entity. Our approach taps into the
subconscious of the audience, making them aspire to follow your journey. (Add video
and 3D elements/animations; Developer note: Include video testimonials and interactive
elements showcasing PR success stories and media coverage.)</p>
<h1 className="servicesdetails">Content Marketing:
</h1>
<p>Craft viral content campaigns from ideation to execution.
Script, shoot (if applicable), and edit content with precision.
Provide organic reach, generating over 75 million views for clients.
Incorporate video and 3D elements/animations for engaging presentation.
Developer note: Include video and interactive elements to showcase the content
creation process.
Performance Marketing:
Utilize Meta ads and Google ads for targeted campaigns.
Drive inorganic traffic to achieve desired outcomes.
Helped clients achieve a 70% increase in leads with a 57% reduction in CPL.
Incorporate video and interactive elements to showcase ad campaigns and results.
Developer note: Include video testimonials and interactive charts/graphs to highlight
performance metrics.</p>
<h1 className="servicesdetails">Public Relations (PR):</h1>
<p>Guarantee a reach of 100 million+ on Instagram in the shortest time possible.
Capture attention as the coolest trend on the internet.
Tap into the subconscious of the audience, making them aspire to follow your journey.
Incorporate video and 3D elements/animations for engaging presentation.
Developer note: Include video testimonials and interactive elements showcasing PR
success stories and media coverage.</p>
    </div>
  );
};
export default ServiceDetail