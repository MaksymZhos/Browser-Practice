# Steps and Commands

## 1. Update System Packages
Update your system packages using the following command:
```bash
sudo pacman -Syu
```

## 2. Install NGINX Mainline
Install NGINX Mainline using the following command:
```bash
sudo pacman -S nginx-mainline
```

## 3. Start NGINX Service
Start the NGINX service using the following command:
```bash
sudo systemctl start nginx
```

## 4. Enable NGINX Service to Start on Boot
Enable the NGINX service to start on boot using the following command:
```bash
sudo systemctl enable nginx
```

## 5. Check the Status of NGINX Service
Check the status of the NGINX service using the following command:
```bash
sudo systemctl status nginx
```

## 6. Stop NGINX Service
Stop the NGINX service using the following command:
```bash
sudo systemctl stop nginx
```

## 7. Check the Status Again to Confirm it is Stopped
Check the status of the NGINX service again to confirm it is stopped using the following command:
```bash
sudo systemctl status nginx
```

## 8. Disable NGINX Service from Starting on Boot
Disable the NGINX service from starting on boot using the following command:
```bash
sudo systemctl disable nginx
```

## 9. Check the Status Again to Confirm it is Disabled
Check the status of the NGINX service again to confirm it is disabled using the following command:
```bash
sudo systemctl status nginx
```

## 10. Uninstall NGINX Mainline
Uninstall NGINX Mainline using the following command:
```bash
sudo pacman -Rs nginx-mainline
```
