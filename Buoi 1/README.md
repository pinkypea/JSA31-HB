# CÁC LỆNH THƯỜNG DÙNG KHI THAO TÁC VỚI GIT
## 1. Cấu hình GIT:
```bash
git config --global user.name "yourusername"
git config --global user.email "youremail@domain.com"
```

## 2. Khởi tạo một kho lưu trữ Git (Git repository):
```bash
git init
```

## 3. Quản lý thay đổi:
### a. Thêm file vào stage (chuẩn bị commit)

```bash
# Thêm một file cụ thể:
git add <tên-file> <tên-file> <tên-file>

# Thêm tất cả các file đã thay đổi:
git add .
```

### b. Commit các thay đổi:
```bash
git commit -m "Mô tả ngắn gọn về thay đổi"
```

### c. Xem trạng thái thay đổi của các file trong kho lữu trữ
```bash
git status
```

### d. Xem chi tiết các sự khác biệt giữa các phiên bản file
```bash
git diff
```

## 4. Chia sẻ và cộng tác:
```bash
# Tải một kho lưu trữ từ xa
git clone <URL>

# Push các thay đổi lên repository từ xa:
git push origin main

# Pull các thay đổi từ repository từ xa:
git pull origin main
```

## 5. Quản lý nhánh (Branch):
```bash
# Chuyển sang nhánh khác
git checkout -b <tên-branch-mới>

# Tạo nhánh mới hoặc chuyển sang branch khác
git checkout <tên-branch>

# Gộp một branch khác vào branch hiện tại
git merge <tên-branch>

# Xóa một branch trên local
git branch -d <tên-branch>

# Xóa một branch trên repository từ xa
git push origin --delete <tên-branch>
