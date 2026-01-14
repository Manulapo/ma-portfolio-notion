const SITE_BASE = (import.meta.env.VITE_SITE_BASE || '/')
const basePrefix = SITE_BASE === '/' ? '' : SITE_BASE.replace(/\/$/, '')

const legoProjectPdf = `${window.location.origin}${basePrefix}/files/PDF/LEGOTrendANALYSIS.pdf`;
const legoProjectSQL = `${window.location.origin}${basePrefix}/files/sql/Lego_set_analysis.sql`;
const resumePDF = `${window.location.origin}${basePrefix}/files/PDF/resumee/Chiara_Coletta_resumee.pdf`;
const dataAnalyticsPDF = `${window.location.origin}${basePrefix}/files/PDF/certifications/Coursera Data Analytics certification.pdf`;
const pythonCertificationPDF = `${window.location.origin}${basePrefix}/files/PDF/certifications/Coursera_PythonCertification.pdf`;
const dataAnalysisSprSQLPDF = `${window.location.origin}${basePrefix}/files/PDF/certifications/Data Analysis with Spreadsheets and SQL_certificate.pdf`;
const dataAnalyticsMethodMrktPDF = `${window.location.origin}${basePrefix}/files/PDF/certifications/Data Analytics Methods for Marketing.pdf`;
const dataAnalyticsFoundationsPDF = `${window.location.origin}${basePrefix}/files/PDF/certifications/Marketing Analytics Foundation.pdf`;
const marketingAnalyticsPDF = `${window.location.origin}${basePrefix}/files/PDF/certifications/Marketing Analytics with Meta Certification.pdf`;
const marketingSciencePDF = `${window.location.origin}${basePrefix}/files/PDF/certifications/Meta Marketing Science Certification Exam.pdf`;
const statisticFoundationsPDF = `${window.location.origin}${basePrefix}/files/PDF/certifications/Statistics Foundations.pdf`;
const pythonDataAnalyticsMavenPDF = `${window.location.origin}${basePrefix}/files/PDF/certifications/pythonDataAnalyticsMavenPDF.pdf`;
const PythonPandasCertificationMavenPDF = `${window.location.origin}${basePrefix}/files/PDF/certifications/PythonPandasCertification.pdf`
const hubSpotSocialMediaReady = `${window.location.origin}${basePrefix}/files/PDF/certifications/HubSpot_SocialMediaCertified.jpg`;
const hubSpotDigitalMarketing = `${window.location.origin}${basePrefix}/files/PDF/certifications/HubSpot_DigitalMarketingCertified.jpeg`;
const avatar = `${window.location.origin}${basePrefix}/images/other/me.png`;
const denmarkFlag = `${window.location.origin}${basePrefix}/icons/DK.png`;


export const links = {
  resumePDF,
  dataAnalyticsPDF,
  pythonCertificationPDF,
  dataAnalysisSprSQLPDF,
  dataAnalyticsMethodMrktPDF,
  dataAnalyticsFoundationsPDF,
  marketingAnalyticsPDF,
  marketingSciencePDF,
  statisticFoundationsPDF,
  pythonDataAnalyticsMavenPDF,
  hubSpotSocialMediaReady,
  hubSpotDigitalMarketing,
  PythonPandasCertificationMavenPDF,
  legoProjectPdf,
  legoProjectSQL,
  avatar,
  linkedin: "https://www.linkedin.com/in/chiara-coletta/",
  website: "https://www.chiara-coletta.space",
  vizzy: "https://vizzy.com/@chiaracoletta98",
  github: "",
};


export const images = {
  avatar,
  denmarkFlag,
}
