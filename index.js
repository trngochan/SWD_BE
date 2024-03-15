const express = require("express");
const helmet = require("helmet");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const cors = require("cors");
const swaggerJSDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./swagger-output.json");

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

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

/**
 * @swagger
 * /api/users:
 *   get:
 *     summary: Lấy thông tin người dùng
 *     description: Trả về thông tin của tất cả người dùng
 *     responses:
 *       '200':
 *         description: Thành công
 */
//Import api
// authMiddleware.authenticateToken

app.use("/api", authRoutes);
app.use("/api", authMiddleware.authenticateToken, tranpointRoutes);
app.use(
  "/api",
  authMiddleware.authenticateToken,
  transactionHistoryPointRoutes
);
app.use("/api", authMiddleware.authenticateToken, clubRoutes);
app.use("/api", authMiddleware.authenticateToken, clubMemberRoutes);
app.use("/api", authMiddleware.authenticateToken, clubMemSlotRoutes);
app.use("/api", authMiddleware.authenticateToken, slotRoutes);

app.use("/api", authMiddleware.authenticateToken, memberRoutes);
app.use("/api", authMiddleware.authenticateToken, walletRoutes);
app.use("/api", authMiddleware.authenticateToken, areaRoutes);
app.use("/api", authMiddleware.authenticateToken, buildingRoutes);
app.use("/api", authMiddleware.authenticateToken, sportRoutes);
app.use("/api", authMiddleware.authenticateToken, yardRoutes);

app.use("/api", authMiddleware.authenticateToken, adminRoutes);
app.use("/api", authMiddleware.authenticateToken, staffRoutes);

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
