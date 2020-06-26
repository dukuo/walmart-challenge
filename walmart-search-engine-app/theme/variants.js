import { blue, green, grey, indigo, red } from "@material-ui/core/colors";

const darkVariant = {
  name: "Dark",
  palette: {
    primary: {
      main: "#2C70BF",
      contrastText: "#FFF"
    },
    secondary: {
      main: "#F7BB5A",
      contrastText: "#2C70BF"
    },
    darkPrimary: {
      main: "#133355",
      contrastText: "#F7BB5A"
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
    },
    darkPrimary: {
      main: "#20578B",
      contrastText: "#F7BB5A"
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
