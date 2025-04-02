export const codedataAI = {
  language: "python",
  filename: "personal.py",
  highlightLines: [],
  code: `import datetime

# --- 1. Thu thập thông tin người dùng ---
def get_user_input():
    """Thu thập thông tin cơ bản từ người dùng."""
    print("--- Vui lòng cung cấp thông tin của bạn ---")
    while True:
        try:
            weight = float(input("Cân nặng hiện tại (kg): "))
            if weight > 0:
                break
            else:
                print("Cân nặng phải là số dương.")
        except ValueError:
            print("Vui lòng nhập cân nặng bằng số.")

    while True:
        try:
            height = float(input("Chiều cao (cm): "))
            if height > 0:
                break
            else:
                print("Chiều cao phải là số dương.")
        except ValueError:
            print("Vui lòng nhập chiều cao bằng số.")

    allergies_input = input("Các loại đồ ăn bạn bị dị ứng (cách nhau bằng dấu phẩy, ví dụ: tôm, đậu phộng) hoặc bỏ trống: ")
    allergies = [item.strip().lower() for item in allergies_input.split(',') if item.strip()] # Chuyển thành list chữ thường

    print("\nMục tiêu của bạn là gì?")
    print("  1. Tăng cân (ví dụ: tăng 5 cân)")
    print("  2. Giảm mỡ / Giảm cân (ví dụ: giảm mỡ bụng, giảm 3 cân)")
    print("  3. Giữ dáng / Tăng cường sức khỏe")
    while True:
        goal_choice = input("Nhập lựa chọn của bạn (1, 2, hoặc 3): ")
        if goal_choice == '1':
            goal_description = input("Mô tả cụ thể mục tiêu tăng cân (ví dụ: tăng 5 cân): ")
            goal_type = "tăng cân"
            break
        elif goal_choice == '2':
            goal_description = input("Mô tả cụ thể mục tiêu giảm mỡ/cân (ví dụ: giảm mỡ bụng): ")
            goal_type = "giảm mỡ"
            break
        elif goal_choice == '3':
            goal_description = "Giữ dáng / Tăng cường sức khỏe"
            goal_type = "giữ dáng"
            break
        else:
            print("Lựa chọn không hợp lệ.")

    print("\nBạn muốn kế hoạch tập luyện trong bao lâu?")
    print("  1. 3 tháng")
    print("  2. 6 tháng")
    print("  3. 1 năm (12 tháng)")
    while True:
        duration_choice = input("Nhập lựa chọn của bạn (1, 2, hoặc 3): ")
        if duration_choice == '1':
            duration_months = 3
            break
        elif duration_choice == '2':
            duration_months = 6
            break
        elif duration_choice == '3':
            duration_months = 12
            break
        else:
            print("Lựa chọn không hợp lệ.")

    return {
        "weight": weight,
        "height": height,
        "allergies": allergies, # Lưu ý: Dị ứng chủ yếu ảnh hưởng đến dinh dưỡng, ít hơn đến bài tập
        "goal_type": goal_type,
        "goal_description": goal_description,
        "duration_months": duration_months
    }

# --- 2. Cơ sở dữ liệu bài tập (Ví dụ cực kỳ đơn giản) ---
def load_exercise_database():
    """Tải cơ sở dữ liệu bài tập mẫu."""
    # Trong thực tế, dữ liệu này nên được lưu trong file (CSV, JSON) hoặc database
    # Cần thêm nhiều thông tin hơn: video hướng dẫn, nhóm cơ phụ, mức độ khó, thiết bị cần...
    return [
        {"name": "Chạy bộ (ngoài trời/máy)", "type": "cardio", "focus": "toàn thân, tim mạch", "intensity": "trung bình-cao"},
        {"name": "Đi bộ nhanh", "type": "cardio", "focus": "toàn thân, tim mạch", "intensity": "thấp-trung bình"},
        {"name": "Đạp xe", "type": "cardio", "focus": "chân, tim mạch", "intensity": "trung bình-cao"},
        {"name": "Squat (gánh tạ/không tạ)", "type": "strength", "focus": "chân, mông", "intensity": "trung bình-cao"},
        {"name": "Deadlift", "type": "strength", "focus": "lưng dưới, chân, mông, toàn thân", "intensity": "cao"},
        {"name": "Bench Press (Đẩy ngực)", "type": "strength", "focus": "ngực, vai, tay sau", "intensity": "trung bình-cao"},
        {"name": "Overhead Press (Đẩy vai)", "type": "strength", "focus": "vai, tay sau", "intensity": "trung bình"},
        {"name": "Pull-up / Lat Pulldown (Kéo xô)", "type": "strength", "focus": "lưng trên, tay trước", "intensity": "trung bình-cao"},
        {"name": "Plank", "type": "strength", "focus": "core (bụng, lưng dưới)", "intensity": "thấp-trung bình"},
        {"name": "Push-up (Hít đất)", "type": "strength", "focus": "ngực, vai, tay sau, core", "intensity": "trung bình"},
        {"name": "Lunges", "type": "strength", "focus": "chân, mông", "intensity": "trung bình"},
        {"name": "Yoga / Stretching", "type": "flexibility", "focus": "toàn thân", "intensity": "thấp"},
    ]

# --- 3. Logic tạo kế hoạch tập luyện (Ví dụ đơn giản) ---
def generate_exercise_plan(user_info, exercises):
    """Tạo kế hoạch tập luyện dựa trên thông tin người dùng và mục tiêu."""
    goal = user_info["goal_type"]
    duration = user_info["duration_months"]
    plan = {
        "goal_description": user_info["goal_description"],
        "duration_months": duration,
        "warning": "**TUYÊN BỐ MIỄN TRỪ TRÁCH NHIỆM QUAN TRỌNG:** Kế hoạch này chỉ mang tính tham khảo, được tạo tự động và rất cơ bản. Nó KHÔNG thay thế lời khuyên từ bác sĩ, chuyên gia dinh dưỡng hay huấn luyện viên chuyên nghiệp. Luôn tham khảo ý kiến chuyên gia trước khi bắt đầu bất kỳ chương trình tập luyện hoặc thay đổi lối sống nào, đặc biệt nếu bạn có bệnh lý nền.",
        "weekly_schedule": {} # Sẽ chứa lịch tập cho mỗi tuần (ví dụ đơn giản)
    }

    # Logic lựa chọn bài tập và cấu trúc lịch tập rất cơ bản
    sample_weekly_plan = {}

    if goal == "giảm mỡ":
        # Ưu tiên cardio và tập sức mạnh toàn thân
        cardio_options = [ex for ex in exercises if ex["type"] == "cardio"]
        strength_options = [ex for ex in exercises if ex["type"] == "strength"]
        flexibility = [ex for ex in exercises if ex["type"] == "flexibility"]

        sample_weekly_plan = {
            "Thứ 2": f"Cardio: {cardio_options[0]['name']} (30-45 phút)",
            "Thứ 3": f"Nghỉ ngơi hoặc {flexibility[0]['name']} nhẹ nhàng",
            "Thứ 4": f"Tập sức mạnh toàn thân (ví dụ: {strength_options[0]['name']}, {strength_options[8]['name']}, {strength_options[7]['name']}) - 3 set x 10-15 reps",
            "Thứ 5": f"Cardio: {cardio_options[1]['name']} (40 phút)",
            "Thứ 6": f"Tập sức mạnh toàn thân (ví dụ: {strength_options[3]['name']}, {strength_options[5]['name']}, {strength_options[9]['name']}) - 3 set x 10-15 reps",
            "Thứ 7": f"Hoạt động nhẹ nhàng (đi bộ) hoặc {flexibility[0]['name']}",
            "Chủ nhật": "Nghỉ ngơi"
        }
        plan["notes"] = "Tập trung vào việc duy trì cường độ cardio ổn định và thực hiện đúng kỹ thuật các bài tập sức mạnh. Kết hợp với chế độ ăn thâm hụt calo (tham khảo chuyên gia dinh dưỡng)."

    elif goal == "tăng cân":
        # Ưu tiên tập sức mạnh, đặc biệt là các bài compound
        strength_options = [ex for ex in exercises if ex["type"] == "strength"]
        cardio_light = [ex for ex in exercises if ex["type"] == "cardio" and ex['intensity'] in ['thấp-trung bình']]
        flexibility = [ex for ex in exercises if ex["type"] == "flexibility"]

        # Ví dụ lịch tập trung vào các nhóm cơ lớn
        sample_weekly_plan = {
            "Thứ 2": f"Tập trung thân trên (ví dụ: {strength_options[5]['name']}, {strength_options[6]['name']}, {strength_options[7]['name']}) - 3-4 set x 8-12 reps",
            "Thứ 3": f"Nghỉ ngơi hoặc {flexibility[0]['name']}",
            "Thứ 4": f"Tập trung thân dưới (ví dụ: {strength_options[3]['name']}, {strength_options[4]['name']}, {strength_options[5]['name']}) - 3-4 set x 8-12 reps",
            "Thứ 5": f"Nghỉ ngơi hoặc {cardio_light[0]['name']} (20-30 phút)",
            "Thứ 6": f"Tập toàn thân hoặc lặp lại thân trên/dưới (ví dụ: {strength_options[9]['name']}, {strength_options[8]['name']}, bài tập tay) - 3 set x 8-12 reps",
            "Thứ 7": f"{flexibility[0]['name']} hoặc nghỉ",
            "Chủ nhật": "Nghỉ ngơi"
        }
        plan["notes"] = "Tập trung vào việc nâng dần mức tạ (progressive overload) và thực hiện đúng kỹ thuật. Nghỉ ngơi đủ và kết hợp với chế độ ăn dư thừa calo, giàu protein (tham khảo chuyên gia dinh dưỡng)."

    else: # Giữ dáng
         # Kết hợp cân đối cardio và sức mạnh
        cardio_options = [ex for ex in exercises if ex["type"] == "cardio"]
        strength_options = [ex for ex in exercises if ex["type"] == "strength"]
        flexibility = [ex for ex in exercises if ex["type"] == "flexibility"]
        sample_weekly_plan = {
            "Thứ 2": f"Cardio: {cardio_options[0]['name']} (30 phút)",
            "Thứ 3": f"Tập sức mạnh phần trên (ví dụ: {strength_options[5]['name']}, {strength_options[7]['name']}) - 3 set x 10-12 reps",
            "Thứ 4": f"Nghỉ hoặc {flexibility[0]['name']}",
            "Thứ 5": f"Tập sức mạnh phần dưới (ví dụ: {strength_options[3]['name']}, {strength_options[5]['name']}) - 3 set x 10-12 reps",
            "Thứ 6": f"Cardio: {cardio_options[2]['name']} (30 phút) hoặc bài tập Core ({strength_options[5]['name']})",
            "Thứ 7": f"Hoạt động yêu thích hoặc nghỉ",
            "Chủ nhật": "Nghỉ ngơi"
        }
        plan["notes"] = "Duy trì lịch tập đều đặn, lắng nghe cơ thể và điều chỉnh khi cần. Kết hợp với chế độ ăn uống cân bằng."

    # Logic tạo kế hoạch dài hạn (3, 6, 12 tháng) cần phức tạp hơn nhiều
    # Ở đây chỉ minh họa 1 tuần mẫu, cần lặp lại và điều chỉnh (tăng cường độ, khối lượng) theo thời gian
    plan["weekly_schedule"]["Tuần mẫu (Áp dụng và điều chỉnh trong suốt quá trình)"] = sample_weekly_plan
    plan["progression_notes"] = f"Kế hoạch {duration} tháng này yêu cầu sự điều chỉnh liên tục. Cứ sau 4-6 tuần, bạn nên xem xét tăng dần độ khó (tăng tạ, số lần lặp, thời gian cardio, giảm thời gian nghỉ) để cơ thể tiếp tục thích nghi và phát triển (nguyên tắc Progressive Overload). Hãy lắng nghe cơ thể và tham khảo chuyên gia."

    # Phần dị ứng chưa được sử dụng trực tiếp trong việc *chọn bài tập* ở ví dụ này
    # nhưng nó rất quan trọng cho phần kế hoạch dinh dưỡng (nếu có).
    # Cần lưu ý nếu dị ứng liên quan đến bệnh lý có thể ảnh hưởng vận động.
    if user_info["allergies"]:
         plan["allergy_reminder"] = f"Lưu ý: Bạn đã liệt kê dị ứng với {', '.join(user_info['allergies'])}. Hãy đảm bảo chế độ dinh dưỡng của bạn (tham khảo chuyên gia) phù hợp và không chứa các chất gây dị ứng này."

    return plan

# --- 4. Chạy chương trình ---
if __name__ == "__main__":
    # Lấy thông tin người dùng
    user_profile = get_user_input()
    print("\n--- Thông tin của bạn ---")
    print(f"Mục tiêu: {user_profile['goal_description']}")
    print(f"Thời gian kế hoạch: {user_profile['duration_months']} tháng")
    if user_profile['allergies']:
        print(f"Dị ứng ghi nhận: {', '.join(user_profile['allergies'])}")

    # Tải cơ sở dữ liệu bài tập (mẫu)
    exercises_db = load_exercise_database()

    # Tạo kế hoạch tập luyện (mẫu)
    exercise_plan = generate_exercise_plan(user_profile, exercises_db)

    # Hiển thị kết quả
    print("\n\n--- KẾ HOẠCH TẬP LUYỆN GỢI Ý ---")
    print(f"Mục tiêu chính: {exercise_plan['goal_description']}")
    print(f"Thời gian dự kiến: {exercise_plan['duration_months']} tháng")
    print("\n" + exercise_plan['warning'] + "\n") # In cảnh báo quan trọng

    if exercise_plan.get('allergy_reminder'):
        print(exercise_plan['allergy_reminder'] + "\n")

    print("LỊCH TẬP HÀNG TUẦN MẪU:")
    # In lịch tập tuần mẫu
    for day, activity in exercise_plan["weekly_schedule"]["Tuần mẫu (Áp dụng và điều chỉnh trong suốt quá trình)"].items():
        print(f"  - {day}: {activity}")

    print("\nGHI CHÚ QUAN TRỌNG:")
    if "notes" in exercise_plan:
        print(f"- {exercise_plan['notes']}")
    if "progression_notes" in exercise_plan:
        print(f"- {exercise_plan['progression_notes']}")

    print("\n--- KẾT THÚC GỢI Ý ---")
    print("Hãy nhớ tham khảo ý kiến chuyên gia để có kế hoạch chi tiết và an toàn nhất cho bạn!")`,
};
