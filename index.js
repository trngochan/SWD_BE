const express = require("express");
const helmet = require("helmet");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const cors = require("cors");


const tranpointRoutes = require("./src/routers/tranpoint.router");
const transactionHistoryPointRoutes = require("./src/routers/transactionHistoryPoint.router");
const clubRoutes = require("./src/routers/club.router");
const clubMemberRoutes = require("./src/routers/clubMember.router");
const clubMemSlotRoutes = require("./src/routers/clubMemSlot.router");
const slotRoutes = require("./src/routers/slot.router");

const memberRoutes = require("./src/routers/member.router");
const walletRoutes = require("./src/routers/wallet.router");
const areaRoutes = require("./src/routers/area.router");
const buildingRoutes = require("./src/routers/building.router");
const sportRoutes = require("./src/routers/sport.router");
const yardRoutes = require("./src/routers/yard.router");
const authRoutes = require("./src/routers/auth.router");
const authMiddleware = require("./src/common/authMiddleware");


const db = require("./src/common/connect");
const passport = require("./src/common/passport");
const { ensureAuthenticated } = require("./src/common/authMiddleware");


const PORT = process.env.PORT || 3000;

const app = express();
app.use(cors({ credentials: true, origin: true }));
app.use(helmet());
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(
  session({ secret: "your-secret-key", resave: true, saveUninitialized: true })
);

//Import api
app.use("/api", memberRoutes);
app.use("/api", tranpointRoutes);
app.use("/api", tranpointRoutes);
app.use("/api", transactionHistoryPointRoutes);
app.use("/api", clubRoutes);
app.use("/api", clubMemberRoutes);
app.use("/api", clubMemSlotRoutes);
app.use("/api", slotRoutes);

app.use("/api", authRoutes);
app.use("/api", authMiddleware.authenticateToken, memberRoutes);
app.use("/api", authMiddleware.authenticateToken, walletRoutes);
app.use("/api", authMiddleware.authenticateToken, areaRoutes);
app.use("/api", authMiddleware.authenticateToken, buildingRoutes);
app.use("/api", authMiddleware.authenticateToken, sportRoutes);
app.use("/api", authMiddleware.authenticateToken, yardRoutes);

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
