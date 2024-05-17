// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

import questions from '../questionsBd';
import QuestionModel from "../../../../model/question_model";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Object>,
) {
  const selectedId = +(req.query?.id ?? 0);

  const selectedQuestion = questions.filter(question => question.id===selectedId);

  if(selectedQuestion.length===1){
    const question = selectedQuestion[0];
    res.status(200).json(question.toMap());
  } else {
    res.status(204).end();
  }

}
