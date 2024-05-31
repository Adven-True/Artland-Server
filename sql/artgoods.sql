
SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for goods
-- ----------------------------
DROP TABLE IF EXISTS `goods`;
CREATE TABLE `goods`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `goodname` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL COMMENT 'name',
  `gooddesc` longtext CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL COMMENT 'intro',
  `mainpng` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL COMMENT 'img',
  `sort_id` int(255) NULL DEFAULT NULL COMMENT 'category',
  `price` varchar(10) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL COMMENT 'price',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = MyISAM AUTO_INCREMENT = 109 CHARACTER SET = utf8 COLLATE = utf8_unicode_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of goods
-- ----------------------------
INSERT INTO `goods` VALUES (104, '0010', '12312123231123', 'file-1716173688782.png', 1, '30');
INSERT INTO `goods` VALUES (105, '002', '312231213231', 'file-1716172102558.png', 2, '12');
INSERT INTO `goods` VALUES (106, '003', '213213231231', 'file-1716172128438.png', 3, '322');
INSERT INTO `goods` VALUES (107, '004', '3212132231231123', 'file-1716172145698.png', 4, '123');
INSERT INTO `goods` VALUES (108, '005', '32123123123', 'file-1716172171846.png', 5, '123');

-- ----------------------------
-- Table structure for orderform
-- ----------------------------
DROP TABLE IF EXISTS `orderform`;
CREATE TABLE `orderform`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `orderdata` longtext CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL COMMENT 'order detail\r\n',
  `uid` varchar(11) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL COMMENT 'userid',
  `date` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL COMMENT 'timestamp',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = MyISAM AUTO_INCREMENT = 96 CHARACTER SET = utf8 COLLATE = utf8_unicode_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of orderform
-- ----------------------------
INSERT INTO `orderform` VALUES (88, '[{\"png\":\"file-1716173688782.png\",\"goodname\":\"0010\",\"sort\":\"oil painting\",\"price\":\"30\",\"sum\":1}]', '26', '1716181028000');

-- ----------------------------
-- Table structure for sort
-- ----------------------------
DROP TABLE IF EXISTS `sort`;
CREATE TABLE `sort`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `sort` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = MyISAM AUTO_INCREMENT = 25 CHARACTER SET = utf8 COLLATE = utf8_unicode_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of sort
-- ----------------------------
INSERT INTO `sort` VALUES (1, 'oil painting');
INSERT INTO `sort` VALUES (2, 'wash painting');
INSERT INTO `sort` VALUES (3, 'sketch');
INSERT INTO `sort` VALUES (4, 'cartoon');
INSERT INTO `sort` VALUES (5, 'sculpture');

-- ----------------------------
-- Table structure for users
-- ----------------------------
DROP TABLE IF EXISTS `users`;
CREATE TABLE `users`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL COMMENT 'username\r\n',
  `password` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL COMMENT 'password\r\n',
  `email` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL COMMENT 'email\r\n',
  `mobile` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL COMMENT 'phone number',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = MyISAM AUTO_INCREMENT = 62 CHARACTER SET = utf8 COLLATE = utf8_unicode_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of users
-- ----------------------------
INSERT INTO `users` VALUES (23, 'test_user', 'HZHR9Uho1wiocMdo3x8C3A==', 'user@gmail.com', '6666666666');


SET FOREIGN_KEY_CHECKS = 1;
