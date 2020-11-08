# Restaurant List
A simple web application to manage favorite restaurants

## Features
- 使用者可以新增一家餐廳
- 使用者可以瀏覽一家餐廳的詳細資訊
- 使用者可以瀏覽全部所有餐廳
- 使用者可以修改一家餐廳的資訊
- 使用者可以刪除一家餐廳

### Account
使用者可以註冊帳號，也可以透過 Facebook Login 直接登入

## Environment SetUp
1. [Node.js] 10.22.0
2. [Express] 4.17.1
3. [nodemon] 2.0.4
4. [MongoDB] 4.2.9

## Installation and Execution
### Setup MongoDB
1. Turn on the DB
```
[~] $ cd ~/mongodb/bin/
[~/mongodb/bin] $ ./mongod --dbpath ~/mongodb-data
```
2. Create database name "restaurant-list"

### Activate Project
1. Clone this git to local
```
[~] $ git clone https://github.com/Pocxtr/RestaurantList.git
```

2. Get into the directory
```
[~] $ cd Restaurant_List
```

3. Install packages
```
[~/Restaurant_List] $ npm install
```

4. Run the project
```
[~/Restaurant_List] $ npm run seed
[~/Restaurant_List] $ npm run start
```
