## 1. 安装 linux服务器
```
apt-get update
```
## 2. 安装node
```
https://nodejs.org/en/download/package-manager/#debian-and-ubuntu-based-linux-distributions
```

```
curl -sL https://deb.nodesource.com/setup_7.x | sudo -E bash -
sudo apt-get install -y nodejs
```

sudo ln -s 源文件 目标文件 
sudo ln -s /usr/local/bin/node

## 3. 安装 npm 
```
apt install npm
npm install n -g
n latest
/usr/local/bin/node
```
## 4. 安装mongodb
```
apt-get install mongodb
```

## 5.安装git
```
apt-get install git
```

## 6. 克隆代码并进入项目目录安装依赖
````
git clone https://
cd 201611crawl
npm install 
````
## 7. 启动服务
```
node server.js
```

## 8.安装 pm2
```
npm install pm2 -g
pm2 start server.js --name "zhufengnodejs-201611crawl"
```

