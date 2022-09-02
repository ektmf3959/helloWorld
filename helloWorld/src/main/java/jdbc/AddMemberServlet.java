package jdbc;

import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Servlet implementation class AddMemberServlet
 */
@WebServlet("/addMemberServlet")
public class AddMemberServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;

	
    public AddMemberServlet() {
        super();        
    }


	protected void doGet(HttpServletRequest request, HttpServletResponse response) 
			throws ServletException, IOException {
		response.getWriter().append("Served at: ").append(request.getContextPath());
	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response) 
			throws ServletException, IOException {
		// 요청정보 param.
		request.setCharacterEncoding("utf-8"); // 한글처리.
		response.setContentType("text/json;charset=utf-8");
		
		String id = request.getParameter("mid");
		String pw = request.getParameter("mpw");
		String nm = request.getParameter("mnm");
		
		Member member = new Member();
		member.setMemberId(id);
		member.setMemberPw(pw);
		member.setMemberName(nm);
		System.out.println(member);
		
		MemberManage dao = MemberManage.getInstance();
		int addCnt = dao.registCustomer(member);
		
		//처리 결과를 ajax 호출한 페이지로 반환.
		if (addCnt == 1) {
			String json = "{\"retCode\": \"success\", \"memberId\":\""+id+"\",\"memberPw\":"+pw+", \"memberName\":\""+nm+"\"}";
			// String json = "{\"retCode\": \"success\", \"memberId\":\""+id+"\",\"memberPw\":"+pw+", \"memberName\":\""+nm+"\"}";
			// pw를 "" 로만 묶으면 숫자로 인식, pw를 아이디퍼럼 \""+pw+"\"를 하면 글자도 인식함.
			response.getWriter().print(json);
		} else {
			String json = "{\"retCode\": \"fail\"}";
			response.getWriter().print(json);
		}
	}

}
