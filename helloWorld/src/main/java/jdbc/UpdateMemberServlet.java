package jdbc;

import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;


@WebServlet("/updateMemberServlet")
public class UpdateMemberServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;

    public UpdateMemberServlet() {
        super();
    }

	protected void doGet(HttpServletRequest request, HttpServletResponse response) 
			throws ServletException, IOException {
	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response) 
			throws ServletException, IOException {
		
		request.setCharacterEncoding("utf-8"); // 한글처리.
		response.setContentType("text/json;charset=utf-8");
		
		//'mid='+id+'&mnm='+nm+'&mpw='+pw;
		String id = request.getParameter("mid");
		String nm = request.getParameter("mnm");
		String pw = request.getParameter("mpw");
	
		Member mem = new Member();
		mem.setMemberId(id);
		mem.setMemberName(nm);
		mem.setMemberPw(pw);
		
		MemberManage dao = MemberManage.getInstance();
		
		// 정상적으로 처리되면 retCode => success, or retCode => fail.
		if(dao.updateMember(mem)) {
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
