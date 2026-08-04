import amazonPanorama from "../../../assets/global-impact/amazon-panorama.jpg";
import madagascarPanorama from "../../../assets/global-impact/madagascar-panorama.jpg";
import borneoPanorama from "../../../assets/global-impact/borneo-panorama.jpg";

export const projectsData = {
  amazon: {
    title: "Amazon Rainforest",
    subtitle: "RESTORING THE EARTH'S LUNGS",
    latLong: "03° 28' S / 62° 12' W",
    location: "South America",
    imgUrl: amazonPanorama,
    image: amazonPanorama,
    fact: "The Amazon acts as the planet's primary carbon sink. However, over 17% of the forest has been lost in recent decades. Your contribution targets high-deforestation zones.",
    story:
      "The Amazon is crucial for global climate stability but faces severe deforestation. Through this initiative, we partner with local communities to plant native trees and restore vital ecosystems.",
    metrics: { time: "3 Years", seeds: "450K", target: "1M" },
  },
  madagascar: {
    title: "Madagascar Ecosystems",
    subtitle: "ISOLATED BIODIVERSITY EVOLUTION",
    latLong: "18° 46' S / 46° 49' E",
    location: "East Africa",
    imgUrl: madagascarPanorama,
    image: madagascarPanorama,
    fact: "Madagascar features 90% wildlife found nowhere else on Earth. Deforestation has isolated these species. Your planting builds biological corridors.",
    story:
      "Madagascar has lost over ninety percent of its original forests. We plant endemic trees to rebuild these unique, isolated habitats and protect endangered wildlife through active local community work.",
    metrics: { time: "2 Years", seeds: "180K", target: "500K" },
  },
  borneo: {
    title: "Borneo Forest",
    subtitle: "CRITICAL WILDLIFE REFUGE CORRIDOR",
    latLong: "00° 59' N / 114° 39' E",
    location: "Southeast Asia",
    imgUrl: borneoPanorama,
    image: borneoPanorama,
    fact: "Borneo's ancient rainforests are critical for orangutan survival. Massive conversion has fragmented the habitat. Your roots restore riverbanks and prevent soil erosion.",
    story:
      "Destructive deforestation has heavily fragmented Borneo’s ancient rainforests. We plant native trees along critical river corridors to reconnect wildlife habitats, restore biodiversity, and stop soil erosion.",
    metrics: { time: "5 Years", seeds: "820K", target: "1.5M" },
  },
};
