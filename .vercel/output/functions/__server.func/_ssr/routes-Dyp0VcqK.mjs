import { i as __toESM } from "../_runtime.mjs";
import { K as require_react, b as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as RotateCcw, c as Clock3, d as Braces, f as ArrowRight, i as Shuffle, l as CircleCheck, n as Trophy, o as Radio, s as Lightbulb, t as Wrench, u as CircleAlert } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-Dyp0VcqK.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var MCQ_BANK = [
	{
		id: "m01",
		kind: "mcq",
		prompt: "Để in dòng chữ Xin chào ra màn hình, cú pháp nào đúng trong Python 3?",
		choices: [
			{
				text: "print 'Xin chào'",
				bug: "Đây là kiểu print của Python 2: không có ngoặc tròn.",
				fix: "Python 3 bắt buộc gọi hàm print(...). Viết print(\"Xin chào\")."
			},
			{
				text: "print(Xin chào)",
				bug: "Thiếu dấu nháy nên Python coi Xin và chào là tên biến, và còn thừa một từ.",
				fix: "Đặt chữ cần in trong dấu nháy: print(\"Xin chào\")."
			},
			{
				text: "print(\"Xin chào\")",
				correct: true
			},
			{
				text: "echo(\"Xin chào\")",
				bug: "echo là lệnh của shell hoặc PHP, không có sẵn trong Python.",
				fix: "Đổi echo thành print."
			}
		],
		hint: "Python 3 dùng một hàm có ngoặc tròn, và chữ phải là chuỗi.",
		why: "print là hàm. Đối số là chuỗi nên cần dấu nháy và ngoặc tròn."
	},
	{
		id: "m02",
		kind: "mcq",
		prompt: "Câu lệnh gán biến nào sau đây KHÔNG hợp lệ?",
		choices: [
			{
				text: "x = 5",
				bug: "Tên x bắt đầu bằng chữ, gán số nguyên — hoàn toàn hợp lệ.",
				fix: "Tìm tên bắt đầu bằng chữ số."
			},
			{
				text: "1_ten = \"Nam\"",
				correct: true
			},
			{
				text: "ten_1 = \"Nam\"",
				bug: "Số ở cuối tên biến vẫn được phép.",
				fix: "Lỗi nằm ở tên bắt đầu bằng số."
			},
			{
				text: "my_var = 10.5",
				bug: "Dấu gạch dưới giữa chữ và số thực đều hợp lệ.",
				fix: "Không chọn phương án đang đúng cú pháp."
			}
		],
		hint: "Tên biến không được bắt đầu bằng chữ số. Dấu _ trong số như 1_000 là chuyện khác.",
		why: "1_ten bị hiểu là một số dở dang rồi dính chữ, nên là SyntaxError. ten_1 thì hợp lệ."
	},
	{
		id: "m03",
		kind: "mcq",
		prompt: "Hàm input() mặc định trả về dữ liệu thuộc kiểu nào?",
		choices: [
			{
				text: "Số nguyên (int)",
				bug: "input() không tự đổi sang số. int(input()) mới là số nguyên.",
				fix: "Tự bọc int(...) nếu cần tính toán."
			},
			{
				text: "Số thực (float)",
				bug: "Người dùng gõ 3.5 vẫn chỉ là chuỗi \"3.5\" cho đến khi gọi float().",
				fix: "Ép kiểu rõ ràng bằng float(input())."
			},
			{
				text: "Logic (bool)",
				bug: "Chuỗi \"False\" vẫn là chữ, không phải giá trị False.",
				fix: "So sánh hoặc ép kiểu, đừng tin input() trả về bool."
			},
			{
				text: "Chuỗi ký tự (str)",
				correct: true
			}
		],
		hint: "Dù người dùng gõ số, thứ nhận về vẫn là chữ cho đến khi bạn ép kiểu.",
		why: "input() luôn trả về str. Muốn số thì viết int(input()) hoặc float(input())."
	},
	{
		id: "m04",
		kind: "mcq",
		prompt: "Đoạn code sau in ra gì?",
		code: "a = \"5\"\nb = \"5\"\nprint(a + b)",
		choices: [
			{
				text: "10",
				bug: "Dấu + với hai chuỗi là nối chữ, không phải cộng số.",
				fix: "Đổi sang int(a) + int(b) nếu muốn ra 10."
			},
			{
				text: "55",
				correct: true
			},
			{
				text: "Lỗi cú pháp",
				bug: "Cú pháp đúng. Lỗi là về nghĩa của phép +, không phải lỗi viết.",
				fix: "Chạy thử: hai chuỗi nối lại thành \"55\"."
			},
			{
				text: "5 + 5",
				bug: "print không in lại công thức, nó in giá trị của biểu thức a + b.",
				fix: "Giá trị đó là chuỗi \"55\"."
			}
		],
		hint: "Nhìn dấu nháy quanh số 5. Hai biến đang là chữ.",
		why: "\"5\" + \"5\" nối chuỗi thành \"55\". Cộng số chỉ xảy ra khi cả hai là int hoặc float."
	},
	{
		id: "m05",
		kind: "mcq",
		prompt: "Phép toán nào dùng để chia lấy phần dư?",
		choices: [
			{
				text: "/",
				bug: "Một gạch chéo là chia thường, 7 / 2 ra 3.5.",
				fix: "Dùng % khi cần phần dư."
			},
			{
				text: "//",
				bug: "Hai gạch chéo là chia lấy phần nguyên, 7 // 2 ra 3.",
				fix: "Phần dư là toán tử %."
			},
			{
				text: "%",
				correct: true
			},
			{
				text: "rem",
				bug: "Python không có toán tử tên rem.",
				fix: "Viết a % b."
			}
		],
		hint: "Cùng ký hiệu với phần trăm.",
		why: "a % b là phần dư. 7 % 2 bằng 1."
	},
	{
		id: "m06",
		kind: "mcq",
		prompt: "Để hỏi hai giá trị có bằng nhau không, ta dùng dấu gì?",
		choices: [
			{
				text: "=",
				bug: "Một dấu bằng là lệnh gán, không phải câu hỏi so sánh.",
				fix: "Trong if phải viết ==. if x = 5 là lỗi cú pháp."
			},
			{
				text: "==",
				correct: true
			},
			{
				text: "===",
				bug: "Ba dấu bằng là JavaScript. Python không có toán tử này.",
				fix: "Python chỉ dùng == để so bằng."
			},
			{
				text: "!=",
				bug: "Đây là khác nhau, ngược với câu hỏi.",
				fix: "Bằng nhau là ==."
			}
		],
		hint: "Gán dùng một dấu, so sánh bằng cần hai dấu.",
		why: "== so sánh và trả về True hoặc False. = chỉ gán giá trị."
	},
	{
		id: "m07",
		kind: "mcq",
		prompt: "Đoạn code in ra chữ gì?",
		code: "x = 10\nif x > 5:\n    print(\"A\")\nelse:\n    print(\"B\")",
		choices: [
			{
				text: "A",
				correct: true
			},
			{
				text: "B",
				bug: "Nhánh else chỉ chạy khi điều kiện sai. 10 > 5 là đúng.",
				fix: "Đọc lại điều kiện trước khi nhảy xuống else."
			},
			{
				text: "Không in gì",
				bug: "Có print trong nhánh đúng, nên chắc chắn có chữ.",
				fix: "Theo nhánh if vì điều kiện đúng."
			},
			{
				text: "Báo lỗi",
				bug: "Thụt lề và dấu hai chấm đều đúng.",
				fix: "Chạy nhánh print(\"A\")."
			}
		],
		hint: "So 10 với 5 trước, rồi chọn đúng một nhánh.",
		why: "10 > 5 nên chỉ khối dưới if được chạy và in A."
	},
	{
		id: "m08",
		kind: "mcq",
		prompt: "Trong Python, từ khóa nào thay cho else if?",
		choices: [
			{
				text: "elseif",
				bug: "Viết liền elseif là ngôn ngữ khác (PHP, C#).",
				fix: "Python rút gọn thành elif."
			},
			{
				text: "elfi",
				bug: "Đảo chữ, không phải từ khóa.",
				fix: "Đúng thứ tự: e-l-i-f."
			},
			{
				text: "elif",
				correct: true
			},
			{
				text: "else_if",
				bug: "Python không dùng dấu gạch dưới cho từ khóa này.",
				fix: "Viết elif."
			}
		],
		hint: "Bốn chữ cái, bắt đầu bằng else được cắt ngắn.",
		why: "elif kiểm tra điều kiện tiếp theo khi các if phía trên sai."
	},
	{
		id: "m09",
		kind: "mcq",
		prompt: "Sau dấu hai chấm của if hoặc vòng lặp, khối lệnh bên trong bắt buộc phải thế nào?",
		choices: [
			{
				text: "Viết hoa chữ cái đầu",
				bug: "Python phân biệt hoa thường nhưng không bắt viết hoa đầu dòng.",
				fix: "Quy tắc khối lệnh là thụt lề."
			},
			{
				text: "Thụt vào bằng dấu cách hoặc Tab",
				correct: true
			},
			{
				text: "Nằm trong ngoặc nhọn {}",
				bug: "Ngoặc nhọn là khối lệnh của C, Java, JavaScript.",
				fix: "Python dùng thụt lề thay cho ngoặc nhọn."
			},
			{
				text: "Không có quy tắc",
				bug: "Viết sát lề trái sẽ lỗi IndentationError hoặc lệnh nằm ngoài khối.",
				fix: "Thụt các dòng thuộc về if/for/while."
			}
		],
		hint: "Python không dùng ngoặc nhọn để gom khối.",
		why: "Các dòng thuộc khối phải thụt sâu hơn dòng có dấu hai chấm. Nên chọn một kiểu và giữ thống nhất."
	},
	{
		id: "m10",
		kind: "mcq",
		prompt: "Vòng lặp nào chạy mãi nếu không có break?",
		choices: [
			{
				text: "while False:",
				bug: "Điều kiện sai ngay từ đầu nên vòng không chạy lần nào.",
				fix: "Vòng vô hạn cần điều kiện luôn đúng, như True."
			},
			{
				text: "while True:",
				correct: true
			},
			{
				text: "for i in range(10):",
				bug: "range(10) chỉ có 10 số rồi dừng.",
				fix: "for với range hữu hạn không vô hạn."
			},
			{
				text: "if True:",
				bug: "if không lặp. Nó chạy khối một lần rồi đi tiếp.",
				fix: "Muốn lặp thì dùng while hoặc for."
			}
		],
		hint: "Nhìn từ khóa while và một điều kiện không bao giờ thành False.",
		why: "while kiểm tra điều kiện trước mỗi vòng. True thì không bao giờ dừng nếu không break hay return."
	},
	{
		id: "m11",
		kind: "mcq",
		prompt: "Lệnh nào thoát khỏi vòng lặp ngay lập tức?",
		choices: [
			{
				text: "stop",
				bug: "Không có lệnh stop trong Python.",
				fix: "Dùng break."
			},
			{
				text: "exit",
				bug: "exit() tắt cả chương trình, không chỉ vòng lặp, và không phải cách viết trong bài.",
				fix: "Trong vòng lặp dùng break."
			},
			{
				text: "break",
				correct: true
			},
			{
				text: "continue",
				bug: "continue chỉ bỏ phần còn lại của vòng hiện tại rồi sang vòng sau.",
				fix: "Muốn thoát hẳn thì break."
			}
		],
		hint: "Nghĩa tiếng Anh là bẻ gãy, cắt đứt vòng lặp.",
		why: "break nhảy ra khỏi while/for gần nhất. continue thì vẫn ở trong vòng."
	},
	{
		id: "m12",
		kind: "mcq",
		prompt: "Vòng lặp này chạy bao nhiêu lần?",
		code: "i = 0\nwhile i < 3:\n    print(i)\n    i = i + 1",
		choices: [
			{
				text: "2 lần",
				bug: "Đếm thiếu lần i = 0 hoặc i = 2. Điều kiện là nhỏ hơn 3, không phải nhỏ hơn 2.",
				fix: "Liệt kê i: 0, 1, 2 rồi mới dừng. Đó là 3 lần."
			},
			{
				text: "3 lần",
				correct: true
			},
			{
				text: "4 lần",
				bug: "Khi i thành 3 thì 3 < 3 sai, không in thêm.",
				fix: "Dừng trước khi in số 3."
			},
			{
				text: "Vô hạn",
				bug: "i tăng mỗi vòng nên cuối cùng không còn nhỏ hơn 3.",
				fix: "Kiểm tra biến đếm có bị quên tăng hay không. Ở đây có i = i + 1."
			}
		],
		hint: "Viết các giá trị của i còn thỏa i < 3.",
		why: "i lần lượt là 0, 1, 2. Ba lần in. Khi i = 3 vòng dừng."
	},
	{
		id: "m13",
		kind: "mcq",
		prompt: "Đoạn code in ra bao nhiêu?",
		code: "x = 5\nx += 2\nprint(x)",
		choices: [
			{
				text: "2",
				bug: "+= không thay x bằng 2. Nó cộng thêm vào giá trị cũ.",
				fix: "Lấy 5 cộng 2."
			},
			{
				text: "5",
				bug: "Dòng thứ hai có đổi x. Không còn là 5.",
				fix: "Áp dụng x = x + 2."
			},
			{
				text: "7",
				correct: true
			},
			{
				text: "Lỗi vì không có +=",
				bug: "Python có toán tử +=. Đây không phải lỗi cú pháp.",
				fix: "Nhớ += là viết tắt của x = x + 2."
			}
		],
		hint: "+= nghĩa là cộng dồn vào chính biến đó.",
		why: "x += 2 giống x = x + 2. 5 + 2 = 7."
	},
	{
		id: "m14",
		kind: "mcq",
		prompt: "Kiểu dữ liệu nào lưu Đúng hoặc Sai?",
		choices: [
			{
				text: "str",
				bug: "str là chuỗi ký tự như \"True\", không phải giá trị logic.",
				fix: "Kiểu logic tên là bool."
			},
			{
				text: "int",
				bug: "int là số nguyên. Số 0 và 1 chỉ đôi khi được dùng như cờ, không phải tên kiểu.",
				fix: "Chọn bool."
			},
			{
				text: "bool",
				correct: true
			},
			{
				text: "float",
				bug: "float là số thực.",
				fix: "Đúng/Sai thuộc bool, với hai giá trị True và False."
			}
		],
		hint: "Tên kiểu viết tắt của boolean. Giá trị mẫu là True và False.",
		why: "bool chỉ có True và False. Chú ý viết hoa chữ cái đầu."
	},
	{
		id: "m15",
		kind: "mcq",
		prompt: "Đoạn code in ra gì?",
		code: "x = 8\nif x > 10:\n    print(\"Lớn\")\nelif x > 5:\n    print(\"Vừa\")\nelse:\n    print(\"Nhỏ\")",
		choices: [
			{
				text: "Lớn",
				bug: "8 không lớn hơn 10, nên nhánh if đầu bị bỏ.",
				fix: "Xét tiếp elif."
			},
			{
				text: "Vừa",
				correct: true
			},
			{
				text: "Nhỏ",
				bug: "else chỉ chạy khi cả if và elif đều sai. 8 > 5 vẫn đúng.",
				fix: "Dừng ở elif, không rơi xuống else."
			},
			{
				text: "Không in gì",
				bug: "Có một nhánh đúng nên có print.",
				fix: "elif x > 5 chạy."
			}
		],
		hint: "Kiểm tra từ trên xuống, gặp nhánh đúng thì dừng.",
		why: "8 > 10 sai, 8 > 5 đúng, in Vừa. Các nhánh sau không chạy."
	},
	{
		id: "m16",
		kind: "mcq",
		prompt: "print(10 / 2) in ra gì trong Python 3?",
		choices: [
			{
				text: "5",
				bug: "Chia một gạch luôn cho kết quả số thực, dù chia hết.",
				fix: "Kết quả hiện là 5.0. Muốn số nguyên thì dùng //."
			},
			{
				text: "5.0",
				correct: true
			},
			{
				text: "Lỗi chia",
				bug: "Chia cho 2 không lỗi.",
				fix: "Chỉ lỗi khi chia cho 0."
			},
			{
				text: "2",
				bug: "Đây không phải chia lấy nguyên hay hoán vị hai số.",
				fix: "10 chia 2 bằng 5.0."
			}
		],
		hint: "Trong Python 3, một dấu / không bao giờ trả về int.",
		why: "Phép / là true division, kết quả kiểu float. 10 / 2 là 5.0. 10 // 2 mới là 5."
	},
	{
		id: "m17",
		kind: "mcq",
		prompt: "Kết quả của 7 // 2 là gì?",
		choices: [
			{
				text: "3.5",
				bug: "3.5 là kết quả của 7 / 2, một dấu gạch.",
				fix: "Hai dấu // bỏ phần thập phân, không làm tròn lên."
			},
			{
				text: "3",
				correct: true
			},
			{
				text: "4",
				bug: "Chia lấy nguyên không làm tròn 3.5 lên 4.",
				fix: "Cắt phần dư: 3 dư 1, kết quả là 3."
			},
			{
				text: "1",
				bug: "1 là phần dư 7 % 2, không phải thương nguyên.",
				fix: "Thương nguyên dùng //."
			}
		],
		hint: "// bỏ phần lẻ, không làm tròn theo kiểu toán học.",
		why: "7 = 2 * 3 + 1, nên 7 // 2 bằng 3."
	},
	{
		id: "m18",
		kind: "mcq",
		prompt: "Đoạn code in ra gì?",
		code: "x = 0\nif x:\n    print(\"A\")\nelse:\n    print(\"B\")",
		choices: [
			{
				text: "A",
				bug: "Số 0 được coi là sai trong điều kiện, không phải đúng.",
				fix: "if x chỉ đúng với giá trị truthy. 0 là falsy."
			},
			{
				text: "B",
				correct: true
			},
			{
				text: "0",
				bug: "Không có print(x). Chỉ in A hoặc B.",
				fix: "Nhìn nhánh else."
			},
			{
				text: "Lỗi",
				bug: "Dùng số làm điều kiện là hợp lệ.",
				fix: "0 rơi xuống else."
			}
		],
		hint: "Những giá trị rỗng hoặc bằng 0 thường bị if coi là sai.",
		why: "0, \"\", None, [] đều falsy. if x với x = 0 chạy else và in B."
	},
	{
		id: "m19",
		kind: "mcq",
		prompt: "range(3) tạo ra những số nào khi dùng trong for?",
		choices: [
			{
				text: "1, 2, 3",
				bug: "range bắt đầu từ 0 nếu không nói số bắt đầu, và không lấy số cuối.",
				fix: "range(3) là 0, 1, 2."
			},
			{
				text: "0, 1, 2",
				correct: true
			},
			{
				text: "0, 1, 2, 3",
				bug: "Số dừng không được in ra.",
				fix: "Dừng trước 3."
			},
			{
				text: "3, 2, 1",
				bug: "range mặc định đi tăng, không đếm ngược.",
				fix: "Đếm ngược cần bước âm, ví dụ range(3, 0, -1)."
			}
		],
		hint: "Mặc định bắt đầu ở 0 và dừng trước số bạn đưa.",
		why: "range(stop) đi từ 0 đến stop - 1."
	},
	{
		id: "m20",
		kind: "mcq",
		prompt: "Đoạn code in những dòng nào?",
		code: "for i in range(3):\n    if i == 1:\n        continue\n    print(i)",
		choices: [
			{
				text: "0 và 1 và 2",
				bug: "continue chặn không cho in khi i bằng 1.",
				fix: "Bỏ qua print của vòng i == 1."
			},
			{
				text: "0 và 2",
				correct: true
			},
			{
				text: "1 và 2",
				bug: "Vòng i = 0 không bị continue, vẫn in.",
				fix: "Chỉ vòng giữa bị bỏ."
			},
			{
				text: "Chỉ 2",
				bug: "Không break, nên vòng 0 vẫn in trước đó.",
				fix: "continue không xóa lần in đã xảy ra."
			}
		],
		hint: "continue nhảy tới vòng sau, không thoát hẳn.",
		why: "i = 0 in 0, i = 1 bị bỏ, i = 2 in 2."
	},
	{
		id: "m21",
		kind: "mcq",
		prompt: "Chỉ số của phần tử đầu tiên trong list hoặc chuỗi là số nào?",
		choices: [
			{
				text: "1",
				bug: "Đếm từ 1 là thói quen đời thường, Python đếm từ 0.",
				fix: "Phần tử đầu là [0]."
			},
			{
				text: "0",
				correct: true
			},
			{
				text: "-1",
				bug: "-1 là phần tử cuối, không phải đầu.",
				fix: "Đầu danh sách là 0, cuối là -1."
			},
			{
				text: "Không có chỉ số",
				bug: "List và str đều truy cập bằng chỉ số trong ngoặc vuông.",
				fix: "Dùng a[0]."
			}
		],
		hint: "Python đếm bắt đầu từ số không.",
		why: "a[0] là phần tử đầu. a[-1] là phần tử cuối."
	},
	{
		id: "m22",
		kind: "mcq",
		prompt: "Đoạn code xảy ra chuyện gì?",
		code: "a = [1, 2, 3]\nprint(a[3])",
		choices: [
			{
				text: "In ra 3",
				bug: "Số 3 nằm ở chỉ số 2, không phải 3.",
				fix: "Chỉ số cuối hợp lệ là 2, hoặc -1."
			},
			{
				text: "In ra None",
				bug: "Python không trả None khi vượt chỉ số. Nó báo lỗi.",
				fix: "Tránh IndexError bằng cách kiểm tra len(a)."
			},
			{
				text: "Báo lỗi IndexError",
				correct: true
			},
			{
				text: "In ra 1",
				bug: "1 nằm ở chỉ số 0.",
				fix: "Đếm 0, 1, 2. Không có chỉ số 3."
			}
		],
		hint: "List 3 phần tử chỉ có chỉ số 0, 1 và 2.",
		why: "a[3] vượt quá cuối list nên ném IndexError."
	},
	{
		id: "m23",
		kind: "mcq",
		prompt: "Kết quả của biểu thức \"ha\" * 2 là gì?",
		choices: [
			{
				text: "haha",
				correct: true
			},
			{
				text: "ha2",
				bug: "Dấu * với chuỗi không nối số vào sau chữ.",
				fix: "Nó lặp lại chuỗi."
			},
			{
				text: "Lỗi kiểu",
				bug: "str nhân với int là phép hợp lệ.",
				fix: "Chuỗi nhân số nguyên thì được, nhân với chuỗi khác mới lỗi."
			},
			{
				text: "ha ha",
				bug: "Python không tự thêm dấu cách.",
				fix: "\"ha\" * 2 là \"haha\"."
			}
		],
		hint: "Nhân chuỗi với số nguyên là lặp lại chuỗi đó.",
		why: "\"ha\" * 2 ghép hai lần \"ha\". \"ha\" * 3 sẽ là \"hahaha\"."
	},
	{
		id: "m24",
		kind: "mcq",
		prompt: "Sau khi chạy, a là gì?",
		code: "a = [1]\na.append(2)\nprint(a)",
		choices: [
			{
				text: "[1, 2]",
				correct: true
			},
			{
				text: "[1]",
				bug: "append có thêm phần tử, list không giữ nguyên.",
				fix: "Nhìn dòng a.append(2)."
			},
			{
				text: "[2]",
				bug: "append thêm vào cuối, không xóa số 1.",
				fix: "Kết quả còn cả phần tử cũ."
			},
			{
				text: "Lỗi vì list không đổi được",
				bug: "List sửa được. Tuple mới là chuỗi không đổi.",
				fix: "append là cách thêm cuối list."
			}
		],
		hint: "append thêm một phần tử vào cuối list sẵn có.",
		why: "List bắt đầu [1], thêm 2 thành [1, 2]. print list sẽ có dấu phẩy và một dấu cách."
	},
	{
		id: "m25",
		kind: "mcq",
		prompt: "Dòng nào là chú thích hợp lệ và không được máy chạy?",
		choices: [
			{
				text: "// ghi chú",
				bug: "Hai gạch chéo là chú thích kiểu C và JavaScript.",
				fix: "Python dùng dấu #."
			},
			{
				text: "# ghi chú",
				correct: true
			},
			{
				text: "<!-- ghi chú -->",
				bug: "Đây là chú thích HTML.",
				fix: "Trong file .py dùng #."
			},
			{
				text: "note: ghi chú",
				bug: "Máy sẽ cố hiểu note là tên biến hoặc lệnh và báo lỗi.",
				fix: "Đặt # ở đầu dòng chú thích."
			}
		],
		hint: "Một ký hiệu đứng đầu dòng, trông như dấu thăng.",
		why: "Từ dấu # đến hết dòng bị bỏ qua. Có thể đặt # sau một lệnh để chú thích cuối dòng."
	},
	{
		id: "m26",
		kind: "mcq",
		prompt: "Giá trị nào nghĩa là không có gì, khác với số 0 và chuỗi rỗng?",
		choices: [
			{
				text: "0",
				bug: "0 vẫn là một số nguyên hợp lệ.",
				fix: "Giá trị trống đặc biệt của Python tên là None."
			},
			{
				text: "\"\"",
				bug: "Chuỗi rỗng vẫn là một str, có kiểu và độ dài 0.",
				fix: "None không phải chuỗi."
			},
			{
				text: "None",
				correct: true
			},
			{
				text: "null",
				bug: "null là Java, JavaScript, JSON. Python không có tên null.",
				fix: "Viết None, chữ N hoa."
			}
		],
		hint: "Viết hoa chữ cái đầu, bốn chữ cái, không phải null.",
		why: "None là giá trị duy nhất của kiểu NoneType. Hàm không return sẽ trả về None."
	},
	{
		id: "m27",
		kind: "mcq",
		prompt: "Hàm được khai báo bằng từ khóa nào?",
		choices: [
			{
				text: "function",
				bug: "function là từ khóa JavaScript.",
				fix: "Python dùng def."
			},
			{
				text: "def",
				correct: true
			},
			{
				text: "fun",
				bug: "Không có từ khóa fun.",
				fix: "Viết def ten_ham():"
			},
			{
				text: "func",
				bug: "func không bắt đầu một hàm.",
				fix: "Dùng def, rồi thụt lề thân hàm."
			}
		],
		hint: "Viết tắt của define, ba chữ cái.",
		why: "def tên(tham_số): mở một hàm. Dòng bên trong phải thụt lề. Gọi hàm bằng tên và ngoặc tròn."
	},
	{
		id: "m28",
		kind: "mcq",
		prompt: "Biểu thức nào đúng để lấy độ dài của list a?",
		choices: [
			{
				text: "a.length",
				bug: "length là thuộc tính của mảng JavaScript, không phải list Python.",
				fix: "Gọi hàm len(a)."
			},
			{
				text: "a.len()",
				bug: "len không phải phương thức của list. Gọi sai sẽ lỗi.",
				fix: "len là hàm đứng ngoài: len(a)."
			},
			{
				text: "len(a)",
				correct: true
			},
			{
				text: "size(a)",
				bug: "Không có hàm size sẵn cho việc này.",
				fix: "Dùng len."
			}
		],
		hint: "Một hàm ngắn đứng ngoài dấu chấm, nhận list làm đối số.",
		why: "len(a) đếm phần tử của list, chuỗi, dict và vài kiểu khác."
	},
	{
		id: "m29",
		kind: "mcq",
		prompt: "Đâu là cách ép chuỗi s thành số nguyên?",
		code: "s = \"12\"",
		choices: [
			{
				text: "int(s)",
				correct: true
			},
			{
				text: "str(s)",
				bug: "str() giữ hoặc đổi thành chuỗi. s vốn đã là chuỗi.",
				fix: "Ép sang số nguyên bằng int."
			},
			{
				text: "s.int()",
				bug: "Chuỗi không có phương thức int().",
				fix: "Viết int(s), hàm bọc ngoài."
			},
			{
				text: "number(s)",
				bug: "Không có hàm number trong Python.",
				fix: "Dùng int cho số nguyên, float cho số thực."
			}
		],
		hint: "Tên kiểu int được dùng như một hàm chuyển đổi.",
		why: "int(\"12\") ra 12. int(\"12.5\") hoặc int(\"abc\") sẽ báo lỗi, nên dữ liệu phải đúng dạng số nguyên."
	},
	{
		id: "m30",
		kind: "mcq",
		prompt: "not (5 > 3) có giá trị nào?",
		choices: [
			{
				text: "True",
				bug: "5 > 3 đã là True. not đảo nó đi.",
				fix: "not True thành False."
			},
			{
				text: "False",
				correct: true
			},
			{
				text: "5",
				bug: "not không trả lại số, nó trả về bool.",
				fix: "Kết quả chỉ còn True hoặc False."
			},
			{
				text: "Lỗi",
				bug: "not áp dụng được trên bool.",
				fix: "Biểu thức hợp lệ và ra False."
			}
		],
		hint: "Tính trong ngoặc trước, rồi phủ định.",
		why: "5 > 3 là True, not True là False."
	}
];
var SHORT_BANK = [
	{
		id: "s01",
		kind: "short",
		prompt: "Viết lệnh in đúng chữ Hello. Phải có tên hàm, ngoặc và dấu nháy.",
		accept: ["print(\"Hello\")", "print('Hello')"],
		show: "print(\"Hello\")",
		hint: "Hàm xuất chữ của Python 3, chữ H viết hoa.",
		why: "print nhận một chuỗi. Dùng nháy kép hoặc nháy đơn đều được.",
		bug: "Hay gặp: quên ngoặc, quên dấu nháy, viết Print hoa, hoặc dùng echo.",
		fix: "Viết thường toàn bộ tên hàm, mở ngoặc, đặt Hello trong nháy, đóng ngoặc: print(\"Hello\").",
		placeholder: "print(\"...\")"
	},
	{
		id: "s02",
		kind: "short",
		prompt: "Gõ ký hiệu toán tử chia lấy phần dư.",
		accept: ["%"],
		show: "%",
		hint: "Cùng một ký tự với dấu phần trăm.",
		why: "a % b là phần dư của phép chia a cho b.",
		bug: "Nhầm với / (chia thường) hoặc // (chia lấy nguyên).",
		fix: "Chỉ gõ một dấu %. Không thêm chữ rem.",
		placeholder: "%"
	},
	{
		id: "s03",
		kind: "short",
		prompt: "Gõ từ khóa Python dùng thay cho else if.",
		accept: ["elif"],
		show: "elif",
		hint: "Bốn chữ cái, viết thường.",
		why: "elif kiểm tra thêm một điều kiện khi if phía trước sai.",
		bug: "Viết elseif, else if hoặc Elif đều không phải từ khóa.",
		fix: "Gõ đúng elif, toàn chữ thường, không dấu cách.",
		placeholder: "elif"
	},
	{
		id: "s04",
		kind: "short",
		prompt: "Gõ lệnh thoát ngay khỏi vòng lặp gần nhất.",
		accept: ["break"],
		show: "break",
		hint: "Nghĩa là bẻ gãy vòng lặp.",
		why: "break nhảy ra khỏi while hoặc for bên trong nhất.",
		bug: "continue chỉ sang vòng kế. stop và exit không phải lệnh thoát vòng.",
		fix: "Gõ break, chữ thường.",
		placeholder: "break"
	},
	{
		id: "s05",
		kind: "short",
		prompt: "Gõ lệnh bỏ qua phần còn lại của vòng hiện tại rồi sang vòng sau.",
		accept: ["continue"],
		show: "continue",
		hint: "Không thoát hẳn vòng lặp.",
		why: "continue nhảy tới lần lặp tiếp theo của while/for.",
		bug: "break sẽ thoát luôn, mạnh hơn yêu cầu.",
		fix: "Gõ continue.",
		placeholder: "continue"
	},
	{
		id: "s06",
		kind: "short",
		prompt: "Kết quả của phép 7 // 2 là số nào? Chỉ gõ số.",
		accept: ["3"],
		show: "3",
		hint: "Hai dấu gạch chéo cắt phần thập phân, không làm tròn lên.",
		why: "7 chia 2 được 3 dư 1, nên thương nguyên là 3.",
		bug: "Hay gõ 3.5 (đó là 7 / 2) hoặc 4 vì làm tròn.",
		fix: "Với // hãy lấy phần nguyên phía dưới: 3.",
		placeholder: "3"
	},
	{
		id: "s07",
		kind: "short",
		prompt: "Kết quả của 2 ** 4 là số nào? ** là lũy thừa.",
		accept: ["16"],
		show: "16",
		hint: "2 mũ 4, tức 2 nhân với chính nó bốn lần.",
		why: "2 * 2 * 2 * 2 = 16.",
		bug: "Nhầm ** với phép nhân thường nên gõ 8, hoặc tính 2 mũ 3.",
		fix: "Nhân đủ bốn thừa số 2 để ra 16.",
		placeholder: "16"
	},
	{
		id: "s08",
		kind: "short",
		prompt: "input() trả về kiểu dữ liệu nào? Gõ tên kiểu ngắn.",
		accept: ["str"],
		show: "str",
		hint: "Dù gõ số trên bàn phím, thứ nhận về vẫn là chữ.",
		why: "input() luôn trả về chuỗi. Ép sang số bằng int hoặc float nếu cần.",
		bug: "Gõ int, float hoặc string. Tên kiểu chuỗi trong Python là str, không phải string.",
		fix: "Gõ đúng ba chữ str.",
		placeholder: "str"
	},
	{
		id: "s09",
		kind: "short",
		prompt: "Viết biểu thức đổi chuỗi \"20\" thành số nguyên 20.",
		accept: ["int(\"20\")", "int('20')"],
		show: "int(\"20\")",
		hint: "Tên kiểu số nguyên dùng như hàm, chuỗi nằm bên trong.",
		why: "int nhận một chuỗi đúng dạng số và trả về int.",
		bug: "Viết \"20\".int(), number(\"20\"), hoặc chỉ gõ 20 mà quên biểu thức.",
		fix: "Bọc chuỗi bằng int: int(\"20\").",
		placeholder: "int(\"20\")"
	},
	{
		id: "s10",
		kind: "short",
		prompt: "Viết biểu thức trả về số phần tử của list hoặc chuỗi tên là a.",
		accept: ["len(a)", "len(a)"],
		show: "len(a)",
		hint: "Hàm ba chữ cái đứng ngoài, không phải a.len.",
		why: "len(a) hoạt động với list, str, dict và nhiều kiểu có độ dài.",
		bug: "a.length, a.len() hoặc size(a) là cách của ngôn ngữ khác.",
		fix: "Viết len(a).",
		placeholder: "len(a)"
	},
	{
		id: "s11",
		kind: "short",
		prompt: "Chỉ số của phần tử đầu tiên là số nào?",
		accept: ["0"],
		show: "0",
		hint: "Python không đếm từ 1.",
		why: "Phần tử đầu là a[0]. a[1] là phần tử thứ hai.",
		bug: "Gõ 1 vì đếm theo thói quen.",
		fix: "Gõ 0.",
		placeholder: "0"
	},
	{
		id: "s12",
		kind: "short",
		prompt: "Gõ giá trị bool nghĩa là đúng. Chú ý chữ hoa.",
		accept: ["True"],
		show: "True",
		hint: "Chữ T viết hoa, các chữ sau viết thường.",
		why: "True và False là hai giá trị của kiểu bool. true thường là lỗi NameError.",
		bug: "Viết true, TRUE hoặc \"True\" có dấu nháy. Có nháy thì thành chuỗi, không còn là bool.",
		fix: "Gõ True, không thêm dấu nháy.",
		placeholder: "True"
	},
	{
		id: "s13",
		kind: "short",
		prompt: "Biểu thức \"Py\" + \"thon\" cho ra chữ gì khi in? Gõ kết quả, không gõ dấu nháy.",
		accept: [
			"Python",
			"\"Python\"",
			"'Python'"
		],
		show: "Python",
		hint: "Dấu + nối hai chuỗi, không thêm dấu cách.",
		why: "Nối \"Py\" với \"thon\" được Python.",
		bug: "Thêm dấu cách thành Py thon, hoặc tưởng đây là phép cộng bị lỗi.",
		fix: "Dính thẳng hai mảnh: Python.",
		placeholder: "Python"
	},
	{
		id: "s14",
		kind: "short",
		prompt: "Viết range để vòng for lần lượt lấy 0, 1, 2, 3, 4.",
		accept: [
			"range(5)",
			"range(0,5)",
			"range(0, 5)"
		],
		show: "range(5)",
		hint: "Số dừng không nằm trong dãy. Muốn tới 4 thì dừng ở 5.",
		why: "range(5) đi từ 0 đến 4. range(0, 5) là cách viết đủ hai đầu.",
		bug: "range(4) thiếu số 4. range(1, 5) thiếu số 0.",
		fix: "Dùng range(5) hoặc range(0, 5).",
		placeholder: "range(5)"
	},
	{
		id: "s15",
		kind: "short",
		prompt: "Gõ toán tử so sánh hai giá trị là khác nhau.",
		accept: ["!="],
		show: "!=",
		hint: "Dấu chấm than rồi dấu bằng.",
		why: "a != b là True khi a và b không bằng nhau.",
		bug: "<> là kiểu Python 2 đã bỏ. !== là JavaScript.",
		fix: "Gõ !=",
		placeholder: "!="
	},
	{
		id: "s16",
		kind: "short",
		prompt: "Viết lệnh gán số 10 cho biến tên diem.",
		accept: ["diem=10", "diem = 10"],
		show: "diem = 10",
		hint: "Một dấu bằng là gán. Tên biến viết thường.",
		why: "diem = 10 lưu số nguyên 10 vào tên diem.",
		bug: "Dùng == sẽ thành biểu thức so sánh, không phải câu lệnh gán đứng riêng theo yêu cầu. Hoặc viết điểm có dấu.",
		fix: "diem = 10 với đúng một dấu = và không dấu tiếng Việt trong tên.",
		placeholder: "diem = 10"
	},
	{
		id: "s17",
		kind: "short",
		prompt: "Viết biểu thức lấy phần tử cuối của list a. Được dùng chỉ số âm.",
		accept: ["a[-1]"],
		show: "a[-1]",
		hint: "-1 nghĩa là đếm lùi một bước từ cuối.",
		why: "Chỉ số âm đi từ cuối list: -1 là phần tử cuối, -2 là áp cuối.",
		bug: "a[len(a)] bị vượt chỉ số. a[len] thiếu ngoặc và vẫn dễ sai.",
		fix: "Cách ngắn nhất: a[-1]. Nếu muốn cách dài thì a[len(a) - 1], nhưng bài này chấm a[-1].",
		placeholder: "a[-1]"
	},
	{
		id: "s18",
		kind: "short",
		prompt: "Kết quả của \"ha\" * 3 là gì? Gõ chữ in ra, không thêm dấu nháy.",
		accept: [
			"hahaha",
			"\"hahaha\"",
			"'hahaha'"
		],
		show: "hahaha",
		hint: "Nhân chuỗi với số là lặp lại chuỗi, không chèn dấu cách.",
		why: "\"ha\" lặp ba lần thành hahaha.",
		bug: "Gõ ha3, ha ha ha, hoặc chỉ ha.",
		fix: "Viết hahaha dính liền.",
		placeholder: "hahaha"
	},
	{
		id: "s19",
		kind: "short",
		prompt: "Kết quả của 10 % 3 là số nào?",
		accept: ["1"],
		show: "1",
		hint: "% là phần dư, không phải thương.",
		why: "10 = 3 * 3 + 1, dư 1.",
		bug: "Gõ 3 vì nghĩ tới thương, hoặc 3.33.",
		fix: "Lấy số dư: 1.",
		placeholder: "1"
	},
	{
		id: "s20",
		kind: "short",
		prompt: "Viết biểu thức đọc một dòng từ bàn phím rồi đổi thành số nguyên.",
		accept: [
			"int(input())",
			"int(input(\"\"))",
			"int(input(''))"
		],
		show: "int(input())",
		hint: "input nằm trong int, vì thứ đọc về là chuỗi.",
		why: "input() ra str, int(...) đổi chuỗi đó thành số nguyên nếu người dùng gõ dạng số.",
		bug: "Chỉ input() thì còn là chữ. input(int()) thì đảo thứ tự và sai.",
		fix: "Bọc đúng chiều: int(input()).",
		placeholder: "int(input())"
	}
];
function bankCounts() {
	return {
		mcq: MCQ_BANK.length,
		short: SHORT_BANK.length
	};
}
function roomKey(raw) {
	return raw.normalize("NFD").replace(/\p{M}/gu, "").replace(/đ/gi, "d").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "").slice(0, 24) || "chung";
}
function cleanName(raw) {
	return raw.replace(/\s+/g, " ").trim().slice(0, 24) || "Ẩn danh";
}
function foldAnswer(raw) {
	return raw.trim().replace(/[“”]/g, "\"").replace(/[‘’]/g, "'").replace(/\s+/g, "").replace(/;+$/g, "");
}
function shortMatches(q, typed) {
	const got = foldAnswer(typed);
	if (!got) return false;
	return q.accept.some((item) => foldAnswer(item) === got);
}
function shuffle(items) {
	const copy = [...items];
	for (let i = copy.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		const a = copy[i];
		const b = copy[j];
		copy[i] = b;
		copy[j] = a;
	}
	return copy;
}
function prepareMcq(q, mix) {
	if (!mix) return q;
	return {
		...q,
		choices: shuffle(q.choices)
	};
}
function sampleQuiz(mcqN, shortN, mix) {
	const mcqCount = clamp(mcqN, 0, MCQ_BANK.length);
	const shortCount = clamp(shortN, 0, SHORT_BANK.length);
	const mcqs = (mix ? shuffle(MCQ_BANK) : MCQ_BANK).slice(0, mcqCount).map((q) => prepareMcq(q, mix));
	const shorts = (mix ? shuffle(SHORT_BANK) : SHORT_BANK).slice(0, shortCount);
	const all = [...mcqs, ...shorts];
	return mix ? shuffle(all) : all;
}
function clamp(n, min, max) {
	if (!Number.isFinite(n)) return min;
	return Math.min(max, Math.max(min, Math.round(n)));
}
function limitFor(q) {
	return q.kind === "mcq" ? 30 : 50;
}
function pointsFor(q, timeLeft) {
	if (q.kind === "mcq") return 10 + Math.floor(timeLeft / 3);
	return 15 + Math.floor(timeLeft / 5);
}
function correctChoice(q) {
	return q.choices.find((c) => c.correct) ?? q.choices[0];
}
function gradeMcq(q, index, timeLeft, timedOut) {
	const picked = index == null ? void 0 : q.choices[index];
	const ok = !timedOut && !!picked?.correct;
	const points = ok ? pointsFor(q, timeLeft) : 0;
	if (ok) return {
		question: q,
		ok,
		timedOut,
		points,
		timeLeft,
		picked: picked?.text,
		bug: "",
		fix: ""
	};
	if (timedOut || !picked) return {
		question: q,
		ok: false,
		timedOut: true,
		points: 0,
		timeLeft: 0,
		bug: "Hết 30 giây trước khi chọn được đáp án.",
		fix: "Đọc gợi ý, gạch các phương án sai ngữ pháp, rồi mới chọn. Đừng để đồng hồ về 0."
	};
	return {
		question: q,
		ok: false,
		timedOut: false,
		points: 0,
		timeLeft,
		picked: picked.text,
		bug: picked.bug ?? "Phương án này không đúng với quy tắc Python.",
		fix: picked.fix ?? "Đối chiếu lại với đáp án đúng và câu giải thích bên dưới."
	};
}
function gradeShort(q, typed, timeLeft, timedOut) {
	if (shortMatches(q, typed)) return {
		question: q,
		ok: true,
		timedOut: false,
		points: pointsFor(q, timeLeft),
		timeLeft,
		typed,
		bug: "",
		fix: ""
	};
	if (!foldAnswer(typed)) return {
		question: q,
		ok: false,
		timedOut: true,
		points: 0,
		timeLeft: 0,
		typed,
		bug: "Hết 50 giây hoặc ô trả lời còn trống.",
		fix: `Gõ đúng dạng máy chấm nhận, ví dụ ${q.show}. Dấu cách thừa được bỏ qua, nhưng hoa thường phải đúng.`
	};
	return {
		question: q,
		ok: false,
		timedOut,
		points: 0,
		timeLeft,
		typed,
		bug: q.bug,
		fix: q.fix
	};
}
function betterRow(prev, next) {
	if (!prev) return next;
	if (next.points > prev.points) return next;
	if (next.points === prev.points && next.elapsedMs < prev.elapsedMs) return next;
	return prev;
}
function sortRows(rows) {
	return [...rows].sort((a, b) => b.points - a.points || a.elapsedMs - b.elapsedMs || a.at - b.at);
}
function formatDuration(ms) {
	const s = Math.max(0, Math.round(ms / 1e3));
	return `${Math.floor(s / 60)}:${(s % 60).toString().padStart(2, "0")}`;
}
function agoLabel(ts, now = Date.now()) {
	const s = Math.max(0, Math.round((now - ts) / 1e3));
	if (s < 15) return "vừa xong";
	if (s < 60) return `${s} giây trước`;
	const m = Math.round(s / 60);
	if (m < 60) return `${m} phút trước`;
	const h = Math.round(m / 60);
	if (h < 48) return `${h} giờ trước`;
	return `${Math.round(h / 24)} ngày trước`;
}
var enc = new TextEncoder();
var dec = new TextDecoder();
function concat(a, b) {
	const out = new Uint8Array(a.length + b.length);
	out.set(a);
	out.set(b, a.length);
	return out;
}
function encodeRem(n) {
	const out = [];
	do {
		let byte = n % 128;
		n = Math.floor(n / 128);
		if (n > 0) byte |= 128;
		out.push(byte);
	} while (n > 0);
	return out;
}
function utfField(text) {
	const bytes = enc.encode(text);
	return {
		bytes,
		len: [bytes.length >> 8, bytes.length & 255]
	};
}
function decodeRem(buf, offset) {
	let multiplier = 1;
	let value = 0;
	for (let i = 0; i < 4; i++) {
		if (offset + i >= buf.length) return null;
		const b = buf[offset + i] ?? 0;
		value += (b & 127) * multiplier;
		if ((b & 128) === 0) return {
			value,
			bytes: i + 1
		};
		multiplier *= 128;
	}
	return null;
}
function packet(typeFlags, body) {
	const rem = encodeRem(body.length);
	const out = new Uint8Array(1 + rem.length + body.length);
	out[0] = typeFlags;
	out.set(rem, 1);
	out.set(body, 1 + rem.length);
	return out;
}
function connectPacket(clientId) {
	const proto = utfField("MQTT");
	const id = utfField(clientId);
	const body = new Uint8Array(proto.len.length + proto.bytes.length + 4 + id.len.length + id.bytes.length);
	let o = 0;
	body.set(proto.len, o);
	o += 2;
	body.set(proto.bytes, o);
	o += proto.bytes.length;
	body[o++] = 4;
	body[o++] = 2;
	body[o++] = 0;
	body[o++] = 30;
	body.set(id.len, o);
	o += 2;
	body.set(id.bytes, o);
	return packet(16, body);
}
function subscribePacket(id, filter) {
	const topic = utfField(filter);
	const body = new Uint8Array(2 + topic.len.length + topic.bytes.length + 1);
	body[0] = id >> 8;
	body[1] = id & 255;
	body.set(topic.len, 2);
	body.set(topic.bytes, 4);
	body[4 + topic.bytes.length] = 0;
	return packet(130, body);
}
function publishPacket(topic, payload, retain) {
	const t = utfField(topic);
	const p = enc.encode(payload);
	const body = new Uint8Array(t.len.length + t.bytes.length + p.length);
	body.set(t.len, 0);
	body.set(t.bytes, 2);
	body.set(p, 2 + t.bytes.length);
	return packet(retain ? 49 : 48, body);
}
/**
* Tiny MQTT 3.1.1 client over WebSocket. Enough for a public-broker
* leaderboard: connect, subscribe, retained publish, ping, reconnect.
*/
var MqttMini = class {
	ws = null;
	buf = /* @__PURE__ */ new Uint8Array(0);
	dead = false;
	ready = false;
	urlIndex = 0;
	misses = 0;
	packetId = 1;
	filter = "";
	queue = [];
	ping = null;
	retry = null;
	opts;
	constructor(opts) {
		this.opts = opts;
	}
	start() {
		this.dead = false;
		this.open();
	}
	stop() {
		this.dead = true;
		this.ready = false;
		if (this.ping) clearInterval(this.ping);
		if (this.retry) clearTimeout(this.retry);
		this.ping = null;
		this.retry = null;
		this.ws?.close();
		this.ws = null;
	}
	subscribe(filter) {
		this.filter = filter;
		if (this.ready) this.send(subscribePacket(this.packetId++, filter));
	}
	publish(topic, payload) {
		if (!this.ready) {
			this.queue.push({
				topic,
				payload
			});
			if (this.queue.length > 20) this.queue.shift();
			return;
		}
		this.send(publishPacket(topic, payload, true));
	}
	send(bytes) {
		if (this.ws?.readyState === WebSocket.OPEN) this.ws.send(bytes);
	}
	open() {
		if (this.dead) return;
		this.ready = false;
		this.buf = /* @__PURE__ */ new Uint8Array(0);
		this.opts.onStatus("connecting");
		const url = this.opts.urls[this.urlIndex % this.opts.urls.length] ?? this.opts.urls[0];
		let sock;
		try {
			sock = new WebSocket(url, ["mqtt"]);
		} catch {
			this.failOver();
			return;
		}
		sock.binaryType = "arraybuffer";
		this.ws = sock;
		sock.onopen = () => {
			if (this.ws !== sock) return;
			this.send(connectPacket(this.opts.clientId));
		};
		sock.onmessage = (ev) => {
			if (this.ws !== sock) return;
			const data = ev.data;
			if (data instanceof ArrayBuffer) this.push(new Uint8Array(data));
		};
		sock.onerror = () => {
			sock.close();
		};
		sock.onclose = () => {
			if (this.ws !== sock || this.dead) return;
			this.ready = false;
			if (this.ping) clearInterval(this.ping);
			this.ping = null;
			this.misses += 1;
			if (this.misses >= 2) {
				this.urlIndex += 1;
				this.misses = 0;
			}
			this.opts.onStatus("offline");
			const wait = Math.min(8e3, 600 * 2 ** Math.min(this.misses, 4));
			this.retry = setTimeout(() => this.open(), wait);
		};
	}
	failOver() {
		this.urlIndex += 1;
		this.opts.onStatus("offline");
		this.retry = setTimeout(() => this.open(), 800);
	}
	push(chunk) {
		this.buf = concat(this.buf, chunk);
		this.drain();
	}
	drain() {
		while (this.buf.length >= 2) {
			const rem = decodeRem(this.buf, 1);
			if (!rem) return;
			const total = 1 + rem.bytes + rem.value;
			if (this.buf.length < total) return;
			const pkt = this.buf.slice(0, total);
			this.buf = this.buf.slice(total);
			this.handle(pkt, rem.bytes);
		}
	}
	handle(pkt, remBytes) {
		const type = pkt[0] >> 4;
		const flags = pkt[0] & 15;
		const body = pkt.slice(1 + remBytes);
		if (type === 2) {
			if ((body[1] ?? 1) !== 0) {
				this.ws?.close();
				return;
			}
			this.ready = true;
			this.misses = 0;
			this.opts.onStatus("live");
			if (this.ping) clearInterval(this.ping);
			this.ping = setInterval(() => this.send(new Uint8Array([192, 0])), 2e4);
			if (this.filter) this.send(subscribePacket(this.packetId++, this.filter));
			const queued = this.queue.splice(0);
			for (const item of queued) this.send(publishPacket(item.topic, item.payload, true));
			return;
		}
		if (type !== 3 || body.length < 2) return;
		const topicLen = (body[0] ?? 0) << 8 | (body[1] ?? 0);
		let i = 2 + topicLen;
		if (i > body.length) return;
		const topic = dec.decode(body.slice(2, 2 + topicLen));
		const qos = flags >> 1 & 3;
		if (qos > 0) {
			const pidHi = body[i] ?? 0;
			const pidLo = body[i + 1] ?? 0;
			i += 2;
			if (qos === 1) {
				const ack = new Uint8Array([
					64,
					2,
					pidHi,
					pidLo
				]);
				this.send(ack);
			}
		}
		this.opts.onMessage(topic, dec.decode(body.slice(i)));
	}
};
var BROKERS = ["wss://broker.hivemq.com:8884/mqtt", "wss://broker.emqx.io:8084/mqtt"];
var PREFIX = "tram-python/v1";
function loadSelfId() {
	const key = "tram-python-id";
	const existing = localStorage.getItem(key);
	if (existing) return existing;
	const id = crypto.randomUUID().replace(/-/g, "").slice(0, 12);
	localStorage.setItem(key, id);
	return id;
}
function cacheKey(room) {
	return `tram-python-board:${room}`;
}
function loadCache(room) {
	try {
		const raw = localStorage.getItem(cacheKey(room));
		if (!raw) return [];
		const parsed = JSON.parse(raw);
		if (!Array.isArray(parsed)) return [];
		return parsed.map(asRow).filter((row) => row != null);
	} catch {
		return [];
	}
}
function saveCache(room, rows) {
	localStorage.setItem(cacheKey(room), JSON.stringify(rows.slice(0, 40)));
}
function asRow(value) {
	if (!value || typeof value !== "object") return null;
	const v = value;
	if (typeof v.id !== "string" || typeof v.name !== "string") return null;
	if (typeof v.points !== "number" || typeof v.correct !== "number") return null;
	if (typeof v.total !== "number" || typeof v.elapsedMs !== "number" || typeof v.at !== "number") return null;
	if (!Number.isFinite(v.points) || v.points < 0 || v.points > 5e3) return null;
	const name = v.name.replace(/\s+/g, " ").trim().slice(0, 24);
	return {
		id: v.id.slice(0, 40),
		name: name || "Ẩn danh",
		points: Math.round(v.points),
		correct: Math.max(0, Math.round(v.correct)),
		total: Math.max(0, Math.round(v.total)),
		elapsedMs: Math.max(0, Math.min(Math.round(v.elapsedMs), 36e5)),
		at: v.at
	};
}
function useLeaderboard(roomRaw) {
	const room = roomKey(roomRaw);
	const [rows, setRows] = (0, import_react.useState)([]);
	const [status, setStatus] = (0, import_react.useState)("connecting");
	const [selfId, setSelfId] = (0, import_react.useState)("");
	const mapRef = (0, import_react.useRef)(/* @__PURE__ */ new Map());
	const clientRef = (0, import_react.useRef)(null);
	const apply = (0, import_react.useCallback)((row) => {
		const best = betterRow(mapRef.current.get(row.id), row);
		mapRef.current.set(best.id, best);
		const list = sortRows([...mapRef.current.values()]);
		setRows(list);
		saveCache(room, list);
	}, [room]);
	(0, import_react.useEffect)(() => {
		const id = loadSelfId();
		setSelfId(id);
		mapRef.current = /* @__PURE__ */ new Map();
		for (const row of loadCache(room)) mapRef.current.set(row.id, row);
		setRows(sortRows([...mapRef.current.values()]));
		const client = new MqttMini({
			urls: BROKERS,
			clientId: `tp${id.slice(0, 8)}${Math.floor(Math.random() * 1e4)}`,
			onStatus: setStatus,
			onMessage: (topic, payload) => {
				const fromTopic = topic.split("/").pop() ?? "";
				const row = asRow(readPayload(payload));
				if (!row || row.id !== fromTopic) return;
				apply(row);
			}
		});
		clientRef.current = client;
		client.subscribe(`${PREFIX}/${room}/+`);
		client.start();
		return () => {
			client.stop();
			if (clientRef.current === client) clientRef.current = null;
		};
	}, [apply, room]);
	return {
		room,
		rows,
		status,
		selfId,
		publish: (0, import_react.useCallback)((row) => {
			apply(row);
			const best = mapRef.current.get(row.id) ?? row;
			clientRef.current?.publish(`${PREFIX}/${room}/${best.id}`, JSON.stringify(best));
		}, [apply, room])
	};
}
function readPayload(text) {
	try {
		return JSON.parse(text);
	} catch {
		return null;
	}
}
var COUNTS = bankCounts();
var DEFAULT_PREFS = {
	name: "",
	room: "chung",
	mcqN: 6,
	shortN: 3,
	mix: true
};
function loadPrefs() {
	try {
		const raw = localStorage.getItem("tram-python-prefs");
		if (!raw) return DEFAULT_PREFS;
		const v = JSON.parse(raw);
		return {
			name: typeof v.name === "string" ? v.name : "",
			room: typeof v.room === "string" && v.room ? v.room : "chung",
			mcqN: clampCount(v.mcqN, 6, COUNTS.mcq),
			shortN: clampCount(v.shortN, 3, COUNTS.short),
			mix: v.mix !== false
		};
	} catch {
		return DEFAULT_PREFS;
	}
}
function clampCount(value, fallback, max) {
	const n = typeof value === "number" ? value : Number(value);
	if (!Number.isFinite(n)) return fallback;
	return Math.min(max, Math.max(0, Math.round(n)));
}
function QuizApp() {
	const [prefs, setPrefs] = (0, import_react.useState)(DEFAULT_PREFS);
	const [hydrated, setHydrated] = (0, import_react.useState)(false);
	const [phase, setPhase] = (0, import_react.useState)("home");
	const [questions, setQuestions] = (0, import_react.useState)([]);
	const [index, setIndex] = (0, import_react.useState)(0);
	const [grades, setGrades] = (0, import_react.useState)([]);
	const [pending, setPending] = (0, import_react.useState)(null);
	const [timeLeft, setTimeLeft] = (0, import_react.useState)(30);
	const [hintOpen, setHintOpen] = (0, import_react.useState)(false);
	const [draft, setDraft] = (0, import_react.useState)("");
	const [now, setNow] = (0, import_react.useState)(0);
	const lockRef = (0, import_react.useRef)(false);
	const startedAt = (0, import_react.useRef)(0);
	const deadline = (0, import_react.useRef)(0);
	const elapsedRef = (0, import_react.useRef)(0);
	const postedRef = (0, import_react.useRef)(false);
	const draftRef = (0, import_react.useRef)("");
	const timeoutRef = (0, import_react.useRef)(() => {});
	const board = useLeaderboard(prefs.room);
	const question = questions[index];
	(0, import_react.useEffect)(() => {
		setPrefs(loadPrefs());
		setHydrated(true);
		setNow(Date.now());
	}, []);
	(0, import_react.useEffect)(() => {
		if (!hydrated) return;
		localStorage.setItem("tram-python-prefs", JSON.stringify(prefs));
	}, [hydrated, prefs]);
	(0, import_react.useEffect)(() => {
		const id = setInterval(() => setNow(Date.now()), 15e3);
		return () => clearInterval(id);
	}, []);
	function patch(partial) {
		setPrefs((prev) => ({
			...prev,
			...partial
		}));
	}
	function arm(q) {
		lockRef.current = false;
		setPending(null);
		setHintOpen(false);
		setDraft("");
		draftRef.current = "";
		const limit = limitFor(q);
		setTimeLeft(limit);
		startedAt.current = Date.now();
		deadline.current = Date.now() + limit * 1e3;
	}
	function finishQuestion(grade) {
		if (lockRef.current) return;
		lockRef.current = true;
		const q = grade.question;
		const spent = Math.min(limitFor(q) * 1e3, Math.max(0, Date.now() - startedAt.current));
		elapsedRef.current += spent;
		setPending(grade);
		setGrades((list) => [...list, grade]);
	}
	timeoutRef.current = () => {
		const q = questions[index];
		if (!q || lockRef.current) return;
		finishQuestion(q.kind === "mcq" ? gradeMcq(q, null, 0, true) : gradeShort(q, draftRef.current, 0, true));
	};
	(0, import_react.useEffect)(() => {
		if (phase !== "play" || pending || !question) return;
		const tick = () => {
			const left = Math.max(0, Math.ceil((deadline.current - Date.now()) / 1e3));
			setTimeLeft(left);
			if (left <= 0) timeoutRef.current();
		};
		tick();
		const id = setInterval(tick, 200);
		return () => clearInterval(id);
	}, [
		phase,
		pending,
		question,
		index
	]);
	(0, import_react.useEffect)(() => {
		if (phase !== "result" || postedRef.current || !board.selfId || grades.length === 0) return;
		postedRef.current = true;
		const correct = grades.filter((g) => g.ok).length;
		const points = grades.reduce((sum, g) => sum + g.points, 0);
		board.publish({
			id: board.selfId,
			name: cleanName(prefs.name),
			points,
			correct,
			total: grades.length,
			elapsedMs: elapsedRef.current,
			at: Date.now()
		});
	}, [
		board,
		grades,
		phase,
		prefs.name
	]);
	function startQuiz() {
		const mcqN = clampCount(prefs.mcqN, 0, COUNTS.mcq);
		const shortN = clampCount(prefs.shortN, 0, COUNTS.short);
		if (mcqN + shortN < 1) return;
		const next = sampleQuiz(mcqN, shortN, prefs.mix);
		postedRef.current = false;
		elapsedRef.current = 0;
		setGrades([]);
		setQuestions(next);
		setIndex(0);
		setPhase("play");
		const first = next[0];
		if (first) arm(first);
	}
	function choose(choiceIndex) {
		const q = questions[index];
		if (!q || q.kind !== "mcq" || lockRef.current) return;
		finishQuestion(gradeMcq(q, choiceIndex, Math.max(0, Math.ceil((deadline.current - Date.now()) / 1e3)), false));
	}
	function submitShort() {
		const q = questions[index];
		if (!q || q.kind !== "short" || lockRef.current) return;
		const left = Math.max(0, Math.ceil((deadline.current - Date.now()) / 1e3));
		finishQuestion(gradeShort(q, draftRef.current, left, false));
	}
	function goNext() {
		if (!pending) return;
		const nextIndex = index + 1;
		if (nextIndex >= questions.length) {
			setPhase("result");
			return;
		}
		setIndex(nextIndex);
		const upcoming = questions[nextIndex];
		if (upcoming) arm(upcoming);
	}
	const points = grades.reduce((sum, g) => sum + g.points, 0);
	const correct = grades.filter((g) => g.ok).length;
	const missed = grades.filter((g) => !g.ok);
	const rank = board.rows.findIndex((row) => row.id === board.selfId);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-paper text-ink",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
			className: "bg-ink text-paper",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto flex max-w-5xl items-center justify-between gap-4 px-4 py-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "grid size-11 place-items-center rounded-xl bg-blue text-paper",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Braces, {
							className: "size-5",
							"aria-hidden": "true"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-lg font-semibold leading-tight",
						children: "Trạm Python"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-gold",
						children: "Cơ bản · trắc nghiệm và trả lời ngắn"
					})] })]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "hidden font-mono text-sm text-gold sm:block",
					children: "Python 3"
				})]
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
			className: "mx-auto grid max-w-5xl gap-6 px-4 py-6 lg:grid-cols-[minmax(0,1fr)_20rem] lg:py-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "min-w-0",
				children: [
					phase === "home" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HomeCard, {
						prefs,
						roomKey: board.room,
						onChange: patch,
						onStart: startQuiz
					}) : null,
					phase === "play" && question ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PlayCard, {
						question,
						index,
						total: questions.length,
						timeLeft,
						hintOpen,
						draft,
						pending,
						onHint: () => setHintOpen(true),
						onChoose: choose,
						onDraft: (value) => {
							draftRef.current = value;
							setDraft(value);
						},
						onSubmit: submitShort,
						onNext: goNext
					}) : null,
					phase === "result" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResultCard, {
						points,
						correct,
						total: grades.length,
						elapsedMs: elapsedRef.current,
						missed,
						rank,
						status: board.status,
						room: board.room,
						onAgain: startQuiz,
						onHome: () => setPhase("home")
					}) : null
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Leaderboard, {
				room: board.room,
				rows: board.rows,
				status: board.status,
				selfId: board.selfId,
				now
			})]
		})]
	});
}
function HomeCard({ prefs, roomKey: key, onChange, onStart }) {
	const total = clampCount(prefs.mcqN, 0, COUNTS.mcq) + clampCount(prefs.shortN, 0, COUNTS.short);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-3xl border border-line bg-card p-5 sm:p-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "text-sm font-medium text-blue",
				children: [
					"Ngân hàng ",
					COUNTS.mcq,
					" trắc nghiệm · ",
					COUNTS.short,
					" trả lời ngắn"
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-2 text-3xl font-semibold tracking-tight",
				children: "Rút một đề rồi làm ngay trên lớp"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-3 max-w-xl text-base leading-relaxed text-muted",
				children: [
					"Mỗi lượt lấy ngẫu nhiên từ bộ câu đã soạn, xáo cả thứ tự câu và phương án. Trắc nghiệm có ",
					30,
					" giây. Câu trả lời ngắn có ",
					50,
					" giây. Sai thì thấy lỗi đang mắc và cách sửa."
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-6 grid gap-4 sm:grid-cols-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "grid gap-2 text-sm font-medium",
						htmlFor: "player-name",
						children: ["Biệt danh trên bảng", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							id: "player-name",
							value: prefs.name,
							maxLength: 24,
							placeholder: "Ví dụ: Lan",
							onChange: (e) => onChange({ name: e.target.value }),
							className: "min-h-11 rounded-xl border border-line bg-paper px-3 text-base font-normal"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "grid gap-2 text-sm font-medium",
						htmlFor: "room-code",
						children: ["Mã phòng", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							id: "room-code",
							value: prefs.room,
							maxLength: 24,
							placeholder: "chung",
							onChange: (e) => onChange({ room: e.target.value }),
							className: "min-h-11 rounded-xl border border-line bg-paper px-3 text-base font-normal"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "grid gap-2 text-sm font-medium",
						htmlFor: "mcq-count",
						children: ["Số câu trắc nghiệm", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							id: "mcq-count",
							type: "number",
							min: 0,
							max: COUNTS.mcq,
							inputMode: "numeric",
							value: prefs.mcqN,
							onChange: (e) => onChange({ mcqN: clampCount(e.target.value, 0, COUNTS.mcq) }),
							className: "min-h-11 rounded-xl border border-line bg-paper px-3 font-mono text-base font-normal"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "grid gap-2 text-sm font-medium",
						htmlFor: "short-count",
						children: ["Số câu trả lời ngắn", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							id: "short-count",
							type: "number",
							min: 0,
							max: COUNTS.short,
							inputMode: "numeric",
							value: prefs.shortN,
							onChange: (e) => onChange({ shortN: clampCount(e.target.value, 0, COUNTS.short) }),
							className: "min-h-11 rounded-xl border border-line bg-paper px-3 font-mono text-base font-normal"
						})]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-3 text-sm text-muted",
				children: [
					"Phòng các máy cùng nhìn: ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-mono text-ink",
						children: key
					}),
					". Hai máy gõ cùng mã thì bảng tự hiện chéo, không cần server riêng. Chỉ ghi biệt danh."
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-5 flex flex-col gap-3 sm:flex-row",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					"aria-pressed": prefs.mix,
					onClick: () => onChange({ mix: !prefs.mix }),
					className: "inline-flex min-h-11 items-center justify-center gap-2 rounded-xl px-4 text-sm font-semibold " + (prefs.mix ? "bg-ink text-paper" : "border border-line bg-paper text-ink"),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shuffle, {
						className: "size-4",
						"aria-hidden": "true"
					}), prefs.mix ? "Đang xáo trộn đề" : "Đề cố định theo thứ tự"]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					disabled: total < 1,
					onClick: onStart,
					className: "inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-gold px-5 text-sm font-semibold text-ink disabled:opacity-50",
					children: [
						"Bắt đầu ",
						total,
						" câu",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {
							className: "size-4",
							"aria-hidden": "true"
						})
					]
				})]
			})
		]
	});
}
function PlayCard({ question, index, total, timeLeft, hintOpen, draft, pending, onHint, onChoose, onDraft, onSubmit, onNext }) {
	const limit = limitFor(question);
	const ratio = Math.max(0, Math.min(1, timeLeft / limit));
	const urgent = timeLeft <= 10;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-3xl border border-line bg-card p-5 sm:p-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-start justify-between gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-sm font-medium text-muted",
					children: [
						"Câu ",
						index + 1,
						"/",
						total
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-sm font-semibold text-blue",
					children: question.kind === "mcq" ? `Trắc nghiệm · 30 giây` : `Trả lời ngắn · 50 giây`
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "inline-flex min-w-16 items-center justify-center gap-1 rounded-full px-3 py-1 font-mono text-sm font-semibold " + (urgent ? "bg-bad text-card" : "bg-ink text-paper"),
					"aria-live": "polite",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock3, {
							className: "size-4",
							"aria-hidden": "true"
						}),
						timeLeft,
						"s"
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-4 h-1.5 overflow-hidden rounded-full bg-line",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: urgent ? "h-full bg-bad" : "h-full bg-gold",
					style: { width: `${ratio * 100}%` }
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-5 text-xl font-semibold leading-snug",
				children: question.prompt
			}),
			question.code ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("pre", {
				className: "mt-4 overflow-x-auto rounded-xl bg-code p-4 font-mono text-sm leading-relaxed text-paper",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", { children: question.code })
			}) : null,
			question.kind === "mcq" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-5 grid gap-3",
				children: question.choices.map((choice, choiceIndex) => {
					const reveal = pending != null;
					const chosen = pending?.picked === choice.text;
					const tone = reveal && choice.correct ? "border-ok bg-ok text-card" : reveal && chosen ? "border-bad bg-bad text-card" : "border-line bg-paper text-ink hover:border-blue";
					return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						disabled: reveal,
						onClick: () => onChoose(choiceIndex),
						className: `min-h-11 rounded-xl border px-4 py-3 text-left text-base disabled:hover:border-current ${tone}`,
						children: choice.text
					}, choice.text);
				})
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				className: "mt-5 flex flex-col gap-3 sm:flex-row",
				onSubmit: (event) => {
					event.preventDefault();
					onSubmit();
				},
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					value: draft,
					disabled: pending != null,
					autoCapitalize: "off",
					autoCorrect: "off",
					spellCheck: false,
					placeholder: question.placeholder ?? "Gõ câu trả lời",
					onChange: (event) => onDraft(event.target.value),
					className: "min-h-11 flex-1 rounded-xl border border-line bg-paper px-3 font-mono text-base",
					"aria-label": "Câu trả lời ngắn"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "submit",
					disabled: pending != null || draft.trim() === "",
					className: "min-h-11 rounded-xl bg-ink px-5 text-sm font-semibold text-paper disabled:opacity-50",
					children: "Nộp đáp án"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-4",
				children: hintOpen ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "flex gap-2 rounded-xl bg-gold-soft px-3 py-3 text-sm leading-relaxed text-ink",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lightbulb, {
						className: "mt-0.5 size-4 shrink-0",
						"aria-hidden": "true"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-semibold",
						children: "Gợi ý. "
					}), question.hint] })]
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: onHint,
					className: "inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-blue",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lightbulb, {
						className: "size-4",
						"aria-hidden": "true"
					}), "Gợi ý nhỏ"]
				})
			}),
			pending ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Feedback, {
				grade: pending,
				onNext,
				last: index + 1 >= total
			}) : null
		]
	});
}
function Feedback({ grade, onNext, last }) {
	const answer = grade.question.kind === "mcq" ? correctChoice(grade.question).text : grade.question.show;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mt-5 rounded-2xl border border-line p-4",
		"aria-live": "polite",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "flex items-center gap-2 text-base font-semibold " + (grade.ok ? "text-ok" : "text-bad"),
				children: [grade.ok ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, {
					className: "size-5",
					"aria-hidden": "true"
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleAlert, {
					className: "size-5",
					"aria-hidden": "true"
				}), grade.ok ? `Đúng · +${grade.points} điểm` : grade.timedOut ? "Hết giờ" : "Chưa đúng"]
			}),
			grade.ok ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-sm leading-relaxed text-muted",
				children: grade.question.why
			}) : null,
			!grade.ok ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-3 grid gap-3 text-sm leading-relaxed",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-semibold",
						children: "Lỗi. "
					}), grade.bug] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "flex gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Wrench, {
							className: "mt-0.5 size-4 shrink-0 text-blue",
							"aria-hidden": "true"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-semibold",
							children: "Cách sửa. "
						}), grade.fix] })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-semibold",
						children: "Đáp án. "
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-mono",
						children: answer
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-muted",
						children: grade.question.why
					})
				]
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				type: "button",
				onClick: onNext,
				className: "mt-4 inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-gold px-5 text-sm font-semibold text-ink",
				children: [last ? "Xem kết quả" : "Câu tiếp", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {
					className: "size-4",
					"aria-hidden": "true"
				})]
			})
		]
	});
}
function ResultCard({ points, correct, total, elapsedMs, missed, rank, status, room, onAgain, onHome }) {
	const note = correct === total ? "Sạch lỗi. Giữ nhịp này khi viết code thật." : correct * 2 >= total ? "Nền ổn. Xem lại từng lỗi bên dưới trước khi làm đề mới." : "Các lỗi cú pháp còn lặp. Đọc phần cách sửa rồi làm lại một đề khác.";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-3xl border border-line bg-card p-5 sm:p-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "text-sm font-medium text-blue",
				children: ["Kết quả phòng ", room]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
				className: "mt-2 text-3xl font-semibold tracking-tight",
				children: [points, " điểm"]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-2 text-base text-muted",
				children: [
					"Đúng ",
					correct,
					"/",
					total,
					" câu · ",
					formatDuration(elapsedMs),
					" ·",
					" ",
					rank >= 0 ? `hạng ${rank + 1} trong phòng` : "đang ghi vào bảng"
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-base leading-relaxed",
				children: note
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-sm text-muted",
				children: status === "live" ? "Điểm cao nhất vừa được phát cho các máy cùng mã phòng." : "Máy này đã lưu điểm. Sẽ gửi sang máy khác ngay khi phòng kết nối lại."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-5 flex flex-col gap-3 sm:flex-row",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: onAgain,
					className: "inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-gold px-5 text-sm font-semibold text-ink",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shuffle, {
						className: "size-4",
						"aria-hidden": "true"
					}), "Rút đề mới"]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: onHome,
					className: "inline-flex min-h-11 items-center justify-center gap-2 rounded-xl border border-line px-5 text-sm font-semibold",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RotateCcw, {
						className: "size-4",
						"aria-hidden": "true"
					}), "Đổi số câu"]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-6 grid gap-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "text-base font-semibold",
						children: "Câu sai và cách sửa"
					}),
					missed.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-muted",
						children: "Không có câu sai trong lượt này."
					}) : null,
					missed.map((grade) => {
						const answer = grade.question.kind === "mcq" ? correctChoice(grade.question).text : grade.question.show;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
							className: "rounded-2xl border border-line p-4",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm font-semibold",
									children: grade.question.prompt
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "mt-2 text-sm leading-relaxed",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-semibold text-bad",
										children: "Lỗi. "
									}), grade.bug]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "mt-2 text-sm leading-relaxed",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-semibold text-blue",
										children: "Cách sửa. "
									}), grade.fix]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "mt-2 font-mono text-sm",
									children: ["Đáp án: ", answer]
								})
							]
						}, grade.question.id + (grade.typed ?? grade.picked ?? ""));
					})
				]
			})
		]
	});
}
function Leaderboard({ room, rows, status, selfId, now }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
		className: "h-fit rounded-3xl border border-line bg-card p-5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-between gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "flex items-center gap-2 text-base font-semibold",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trophy, {
						className: "size-4 text-gold",
						"aria-hidden": "true"
					}), "Bảng xếp hạng"]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: `inline-flex items-center gap-1 text-xs font-semibold ${status === "live" ? "text-ok" : status === "connecting" ? "text-blue" : "text-bad"}`,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Radio, {
						className: "size-3.5",
						"aria-hidden": "true"
					}), status === "live" ? "Đang cập nhật" : status === "connecting" ? "Đang nối" : "Chưa nối được"]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-1 font-mono text-xs text-muted",
				children: ["phòng ", room]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-sm leading-relaxed text-muted",
				children: "Mỗi máy một dòng và giữ lần điểm cao nhất. Máy khác cùng mã phòng thấy dòng mới ngay khi họ đang mở trang."
			}),
			rows.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 rounded-xl bg-paper px-3 py-4 text-sm text-muted",
				children: "Chưa có bài nào trong phòng này."
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
				className: "mt-4 grid max-h-[32rem] gap-2 overflow-auto",
				children: rows.slice(0, 20).map((row, index) => {
					const mine = row.id === selfId;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "grid grid-cols-[1.5rem_minmax(0,1fr)_auto] items-center gap-2 rounded-xl px-2 py-2 " + (mine ? "bg-gold-soft" : "bg-paper"),
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-mono text-sm text-muted",
								children: index + 1
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "min-w-0",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "block truncate text-sm font-semibold",
									children: row.name
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "block text-xs text-muted",
									children: [
										row.correct,
										"/",
										row.total,
										" · ",
										formatDuration(row.elapsedMs),
										now ? ` · ${agoLabel(row.at, now)}` : ""
									]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-mono text-sm font-semibold",
								children: row.points
							})
						]
					}, row.id);
				})
			})
		]
	});
}
var SplitComponent = QuizApp;
//#endregion
export { SplitComponent as component };
