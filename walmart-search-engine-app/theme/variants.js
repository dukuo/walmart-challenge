import { blue, green, grey, indigo, red } from "@material-ui/core/colors";

const darkVariant = {
  name: "Dark",
  palette: {
    primary: {
      main: indigo[600],
      contrastText: "#FFF"
    },
    secondary: {
      main: indigo[400],
      contrastText: "#FFF"
    }
  },
  header: {
    color: "#FFF",
    background: "#00216C",
    search: {
      color: grey[500]
    },
    indicator: {
      background: indigo[500]
    }
  },
  sidebar: {
    color: "#FFF",
    background: indigo[600],
    header: {
      color: "#FFF",
      background: indigo[700],
      brand: {
        color: "#FFFFFF"
      }
    },
    footer: {
      color: "#FFF",
      background: indigo[700],
      online: {
        background: "#FFF"
      }
    },
    category: {
      fontWeight: 400
    },
    badge: {
      color: "#000",
      background: "#FFF"
    }
  },
  body: {
    background: grey[900]
  },
  spacer: {
    borderColor: grey[300]
  }
};

const lightVariant = {
  name: "Light",
  palette: {
    primary: {
      main: "#2C70BF",
      contrastText: "#FFF"
    },
    secondary: {
      main: "#F7BB5A",
      contrastText: "#2C70BF"
    }
  },
  header: {
    color: "#FFF",
    background: "#2C70BF",
    search: {
      color: "#BCBFCA"
    },
    indicator: {
      background: red[700]
    }
  },
  sidebar: {
    color: grey[900],
    background: "#FFF",
    header: {
      color: "#FFF",
      background: blue[800],
      brand: {
        color: "#FFFFFF"
      }
    },
    footer: {
      color: grey[900],
      background: grey[100],
      online: {
        background: green[500]
      }
    },
    category: {
      fontWeight: 600
    },
    badge: {
      color: "#FFF",
      background: green[600]
    }
  },
  body: {
    background: grey[100]
  },
  spacer: {
    borderColor: grey[300]
  }
};


const variants = [
  darkVariant,
  lightVariant,
];

export default variants;
