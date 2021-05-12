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
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var books = require('../model/model');
exports.getBooks = function (req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var getdata;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, books.find({})];
                case 1:
                    getdata = _a.sent();
                    console.log("hiiiiiiii");
                    if (getdata) {
                        res.status(200).send(getdata);
                    }
                    else {
                        res.status(200).send([]);
                    }
                    return [2 /*return*/];
            }
        });
    });
};
exports.getBook = function (req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var _id, getData;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _id = req.params.id;
                    return [4 /*yield*/, books.findById({ _id: _id })];
                case 1:
                    getData = _a.sent();
                    res.status(200).send(getData);
                    return [2 /*return*/];
            }
        });
    });
};
exports.searchbytitle = function (req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var title, getData;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    console.log(req.params);
                    title = new RegExp(req.params.text);
                    return [4 /*yield*/, books.find({ title: { $regex: title, $options: 'i' } })];
                case 1:
                    getData = _a.sent();
                    res.status(200).send(getData);
                    return [2 /*return*/];
            }
        });
    });
};
exports.searchbyauthor = function (req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var author, getData;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    author = new RegExp(req.params.text);
                    return [4 /*yield*/, books.find({ author: { $regex: author, $options: 'i' } })];
                case 1:
                    getData = _a.sent();
                    res.status(200).send(getData);
                    return [2 /*return*/];
            }
        });
    });
};
exports.searchbyprice = function (req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var min_price, max_price;
        return __generator(this, function (_a) {
            min_price = req.params.min_price;
            max_price = req.params.max_price;
            books.find({ price: { $gte: min_price, $lte: max_price } }, function (err, data) {
                if (err) {
                    res.status(400).send("Error");
                }
                else {
                    res.status(200).send(data);
                }
            });
            return [2 /*return*/];
        });
    });
};
exports.searchbyrating = function (req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var rating;
        return __generator(this, function (_a) {
            rating = req.params.rating;
            books.find({ rating: { $gte: rating } }, function (err, data) {
                if (err) {
                    res.status(400).send("Error");
                }
                else {
                    res.status(200).send(data);
                }
            });
            return [2 /*return*/];
        });
    });
};
exports.add = function (req, res) {
    console.log(req.body);
    var book = new books({
        // {type:'POST',
        title: req.body.title,
        author: req.body.author,
        price: req.body.price,
        rating: req.body.rating,
        cover: req.body.cover,
        authorurl: req.body.authorurl,
        description: req.body.description
    });
    book.save();
    res.status(200).send(book);
};
exports.delete = function (req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var DeleteData;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    console.log(req.params);
                    return [4 /*yield*/, books.findOne({ _id: req.params.id })];
                case 1:
                    DeleteData = _a.sent();
                    if (DeleteData) {
                        books.deleteOne(DeleteData).then(res.status(200).send(DeleteData));
                    }
                    return [2 /*return*/];
            }
        });
    });
};
exports.search = function (req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var search;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, books.findOne({ title: req.body.title })];
                case 1:
                    search = _a.sent();
                    res.status(200).send(search);
                    return [2 /*return*/];
            }
        });
    });
};
