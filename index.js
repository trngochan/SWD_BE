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

const adminRoutes = require("./src/routers/adminRoutes/admin.router");
const staffRoutes = require("./src/routers/staffRoutes/staff.router");

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
app.use("/api", authRoutes);
app.use("/api", tranpointRoutes);
app.use("/api", transactionHistoryPointRoutes);
app.use("/api", clubRoutes);
app.use("/api", clubMemberRoutes);
app.use("/api", clubMemSlotRoutes);
app.use("/api", slotRoutes);
// authMiddleware.authenticateToken
// authMiddleware.authenticateToken
// authMiddleware.authenticateToken
// authMiddleware.authenticateToken
// authMiddleware.authenticateToken
// authMiddleware.authenticateToken

app.use("/api", memberRoutes);
app.use("/api", walletRoutes);
app.use("/api", areaRoutes);
app.use("/api", buildingRoutes);
app.use("/api", sportRoutes);
app.use("/api", yardRoutes);

app.use("/api", adminRoutes);
app.use("/api", staffRoutes);

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
