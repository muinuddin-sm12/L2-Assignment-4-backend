"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthController = void 0;
const catchAsync_1 = __importDefault(require("../../utils/catchAsync"));
const auth_service_1 = require("./auth.service");
const http_status_1 = __importDefault(require("http-status"));
const register = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield auth_service_1.AuthServices.register(req.body);
    res.status(http_status_1.default.CREATED).json({
        success: true,
        message: 'User registered successfully',
        statusCode: http_status_1.default.CREATED,
        data: result,
    });
}));
const login = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield auth_service_1.AuthServices.login(req.body);
    res.status(http_status_1.default.OK).json({
        success: true,
        message: 'Login successful',
        statusCode: http_status_1.default.OK,
        data: result,
    });
}));
const changePassword = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userId = req.body.userId;
    const passwordData = {
        oldPassword: req.body.oldPassword,
        newPassword: req.body.newPassword,
    };
    const result = yield auth_service_1.AuthServices.changePassword(userId, passwordData);
    res.status(http_status_1.default.OK).json({
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Password is updated succesfully!',
        data: result,
    });
}));
exports.AuthController = {
    register,
    login,
    changePassword,
};
