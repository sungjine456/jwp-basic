package next.controller.qna;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import core.mvc.AbstractController;
import core.mvc.ModelAndView;
import next.dao.QuestionDao;
import next.model.Question;

public class CreateController extends AbstractController {
	private static final Logger log = LoggerFactory.getLogger(CreateController.class);

    private QuestionDao questionDao = new QuestionDao();
	
	@Override
	public ModelAndView execute(HttpServletRequest req, HttpServletResponse res) throws Exception {
		Question question = new Question(req.getParameter("writer"), req.getParameter("title"), 
				req.getParameter("contents"));
		log.debug("Question : {}", question);
		
		questionDao.insert(question);
		return jspView("redirect:/");
	}
}
