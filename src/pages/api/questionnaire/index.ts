// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

import questions from '../questionsBd';
import QuestionModel from "../../../../model/question_model";
import { shuffle } from "../../../../functions/arrays";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Object>,
) {
  const questionsId = questions.map(q=> q.id);
  const shuffledQuestions = shuffle(questionsId);
  
  res.status(200).json(shuffledQuestions);

}
