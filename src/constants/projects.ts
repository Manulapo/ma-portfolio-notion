import { attachmentSIcon } from ".";
import project1Preview from "/images/p1/Project1_preview.jpg";
import project2Preview from "/images/p2/Project2_preview.jpg";

const { pdf, tableauDS, mySql } = attachmentSIcon;

const legoProjectPdf = `/files/PDF/LEGOTrendANALYSIS.pdf`;
const legoProjectSQL = `/files/sql/Lego_set_analysis.sql`;

export const project1 = {
  title: "Office Supplies Analysis",
  description:
    "When I tackled this advanced Tableau tutorial I crafted a personalized dashboard to answer daily questions about sales and customers (2020–2023). The analysis uncovered weekly and monthly trends, product-category performance, and customer segments — with year-end sales peaks, Technology (Phones and Copiers) as top profit drivers, a 20.4% year-over-year sales increase, and low repeat-purchase rates informing promotion timing and retention strategy.",
  credits: "Sales dashboard: weekly/monthly trends and YoY profit, sales, and quantity (2020–2023). Customer dashboard: distribution by order count and total sales, highlighting segment revenue potential.",
  previewImage: project1Preview,
  tags: ["excel", "tableau"],
  relevantLink:
    "https://public.tableau.com/app/profile/chiara.coletta/viz/Salesdasboard_17457497302050/CustomersDashboard?publish=yes",
  attachments: [
    {
      type: tableauDS,
      link: "https://public.tableau.com/app/profile/chiara.coletta/viz/Salesdasboard_17457497302050/CustomersDashboard?publish=yes",
    },
  ],
  highlights: [
    { title: "What I Learned", text: "Designing advanced Tableau dashboards, building a data narrative, and tailoring UX with layouts, actions, and dynamic KPIs for decision-making.", icon: "fa-solid fa-book-open" },
    { title: "Year‑End Peaks", text: "Consistent sales spikes at year-end — signals optimal timing for promotions.", icon: "fa-solid fa-calendar" },
    { title: "Top Performers", text: "Technology (notably Phones and Copiers) drives the greatest profitability.", icon: "fa-solid fa-trophy" },
    { title: "Growth Trend", text: "Observed a 20.4% year-over-year increase in sales, indicating strong momentum.", icon: "fa-solid fa-chart-line" },
    { title: "Customer Behavior", text: "Many new customers late in 2023 placed only 1–2 orders, highlighting retention opportunities.", icon: "fa-solid fa-users" },
  ],
};

export const project2 = {
  title: "LEGO Sets Analysis",
  description:
    "This end-to-end LEGO Analytics Project leverages the Maven Analytics LEGO dataset (1970–2022). Using SQL, Excel, Tableau Public, and PowerPoint I simulated a full-cycle analytics workflow — from data cleaning and transformation to interactive dashboards and executive storytelling.",
  credits: "Dataset: Maven Analytics LEGO sets (1970–2022). Tools: SQL, Excel, Tableau Public, PowerPoint.",
  previewImage: project2Preview,
  tags: ["excel", "powePoint", "mySql", "tableau"],
  relevantLink:
    "https://public.tableau.com/views/LegoProject_17472965432290/LEGOSetsOverview?:language=en-GB&publish=yes&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link",
  attachments: [
    {
      type: tableauDS,
      link: "https://public.tableau.com/views/LegoProject_17472965432290/LEGOSetsOverview?:language=en-GB&publish=yes&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link",
    },
    {
      type: { ...pdf, name: "Download Deck" },
      link: legoProjectPdf,
    },
    {
      type: { ...mySql, name: "mySQL queryies" },
      link: legoProjectSQL
    }
  ],
  highlights: [
    { title: "Business Questions", text: "How have release volume and complexity evolved? How have average pieces and prices trended? Is price correlated with piece count? Which themes and licensed sets drive minifigure density and higher prices?", icon: "fa-solid fa-question-circle" },
    { title: "Skills Applied", text: "Advanced SQL, exploratory analysis in Excel, interactive Tableau design, KPI definition, and executive storytelling.", icon: "fas fa-solid fa-tools" },
    { title: "What I Did", text: "Built SQL pipelines for cleaning and transformation, used Excel for validation, created dynamic Tableau dashboards with calculated fields (price-per-piece, minifig density, licensed flag), and produced a PowerPoint for stakeholders.", icon: "fa-solid fa-cogs" },
    { title: "Key Insight — Growth", text: "Release volume nearly doubled in the last 20 years, reflecting robust growth.", icon: "fa-solid fa-chart-line" },
    { title: "Key Insight — Correlation", text: "Strong positive correlation between price and piece count confirms value alignment.", icon: "fa-solid fa-link" },
    { title: "Key Insight — Licensed Themes", text: "Licensed themes (Star Wars, Marvel) feature more minifigures and higher average prices.", icon: "fa-solid fa-puzzle-piece" },
    { title: "Key Insight — 2003 Dip", text: "A notable price dip in 2003 coincides with LEGO’s corporate restructuring.", icon: "fa-solid fa-exclamation-triangle" },
    { title: "Key Insight — Themes", text: "Early decades were dominated by Gear; Star Wars and Marvel emerged as leaders in later years.", icon: "fa-solid fa-layer-group" },
    { title: "Key Insight — Price/Piece", text: "Price-per-piece generally decreased over time, suggesting strategic pricing or improved value.", icon: "fa-solid fa-coins" },
  ],
}

export const projects = [project1, project2];
