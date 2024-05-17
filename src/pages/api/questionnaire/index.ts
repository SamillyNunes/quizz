// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

import questions from '../questionsBd';
import QuestionModel from "../../../../model/question_model";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Object>,
) {
    const qs = questions.map(question=> question.id);
  
  res.status(200).json(qs);

}
