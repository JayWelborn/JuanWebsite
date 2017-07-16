#!/usr/bin/env bash

echo "=> updating repo list"
sudo apt-get update

# nginx
echo "=> installing and starting nginx"
sudo apt-get -y install nginx
sudo service nginx start

# ruby, sass, autoprefixer
echo "=> installing ruby"
sudo apt-get -y install ruby-full
echo "=> installing sass"
sudo gem install sass --no-user-install
echo "=> installing autoprefixer"



# set up nginx server
sudo cp /vagrant/.provision/nginx/nginx.conf /etc/nginx/sites-available/site.conf
sudo chmod 644 /etc/nginx/sites-available/site.conf
sudo ln -s /etc/nginx/sites-available/site.conf /etc/nginx/sites-enabled/site.conf
sudo service nginx restart

# clean /var/www
sudo rm -Rf /var/www

# symlink /var/www => /vagrant
ln -s /vagrant/html /var/www