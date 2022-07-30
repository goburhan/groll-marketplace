export default interface ThemeProps {
  mobile: any;
  background: string;
  bigscreen: any;
  mobileMenu: any;
  tablet: any;
  footer: any;
  linkItems: any;
  cardTitle: any;
  divider: any;
  header: any;
  lowerdetail: any;
  card: any;
  gray: any;
  titles: any;
  paragraph: any;
  white: any;
  blackHover: any;
  filterText: any;
  kycCard: any;
  termTitle: any;
  signModal: any;
  kycBottom: any;
  gprice: any;
  blue: any;
  editLower: any;
}

export const dark: ThemeProps = {
  mobile: "586px",
  tablet: "1024px",
  bigscreen: "2000px",
  blue: "#00ACFF",
  mobileMenu: "linear-gradient(180deg, #2D3141 4.65%, #08080B 86.94%)",
  footer: "linear-gradient(180deg, #22242F 4.65%, #0E0E10 86.94%)",
  linkItems: "#FFFFFF",
  cardTitle: "#fff",
  divider: "#282B35",
  header: "#1A1D28",
  kycCard: "#282B35",
  lowerdetail: "#E6E8EC",
  background: "linear-gradient(180deg, #22242F 4.65%, #1A1D28 86.94%)",
  card: "#282B35",
  gray: "#777E90",
  titles: "#fff",
  paragraph: "#E6E8EC",
  white: "#fff",
  blackHover: "#484D57",
  filterText: "#B1B5C4",
  termTitle: "#E6E8EC",
  signModal: "#282B35",
  kycBottom: "#B1B5C3",
  gprice: "#7F8DB6",
  editLower: "#B1B5C3",
};

export const light: ThemeProps = {
  mobile: "586px",
  tablet: "1024px",
  bigscreen: "2000px",
  blue: "#00ACFF",
  signModal: "#fff",
  footer: "#fff",
  linkItems: "#433D5B",
  kycCard:
    "linear-gradient(244.53deg, #00D2FF 18.15%, #DB00FF 122.78%, #09ABF9 147.81%)",
  mobileMenu: "#fff",
  divider: "#282B35",
  header: "#fff",
  lowerdetail: "#433D5B",
  cardTitle: "#433D5B",
  background: "#F9F9F9",
  card: "#E6E8EC",
  gray: "#777E90",
  titles: "#433D5B",
  paragraph: "#E6E8EC",
  white: "#fff",
  blackHover: "#484D57",
  filterText: "#B1B5C4",
  termTitle: "#282B35",
  kycBottom: "#fff",
  gprice: "#433D5B",
  editLower: "#777E91",
};
