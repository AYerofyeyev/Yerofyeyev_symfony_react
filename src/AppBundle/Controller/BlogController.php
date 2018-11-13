<?php
/**
 * Created by PhpStorm.
 * User: ean
 * Date: 09.01.2018
 * Time: 11:48
 */

namespace AppBundle\Controller;


use AppBundle\Entity\Blog;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;

class BlogController extends Controller
{
    private function objectToArray(array $blogListObjects)
    {
        $blogList = [];
        foreach ($blogListObjects as $blogObject) {
            $blog = [
                'id' => $blogObject->getId(),
                'image' => $blogObject->getImage(),
                'video' => $blogObject->getVideo(),
                'title' => $blogObject->getTitle(),
                'date' => $blogObject->getDate(),
                'text' => $blogObject->getText()
            ];
            array_push($blogList, $blog);
        }
        return $blogList;
    }

    public function indexAction()
    {
        $blogListObjects = $this
            ->getDoctrine()
//            ->getManager()
            ->getRepository('AppBundle:Blog')
            ->findAll()
        ; // ->getManager() можно пропустить, он подтянется автоматом при запросе базового репозитория

        return new JsonResponse($this->objectToArray($blogListObjects));
    }

    public function showAction(Blog $blogObject)
    {
        $blogListObjects = [
            $blogObject
        ];

        return new JsonResponse($this->objectToArray($blogListObjects));
    }

    public function createAction(Request $request)
    {
        $method = $request->getMethod();
        $blog = (new Blog())
            ->setImage($request->get('image'))
            ->setVideo($request->get('video'))
            ->setTitle($request->get('title'))
            ->setDate($request->get('date'))
            ->setText($request->get('text'))
        ;

        $em = $this
            ->getDoctrine()
            ->getManager();

        $em->persist($blog);

        $em->flush();

        return new JsonResponse(['result' => 'ok', 'Request method' => $method]);
    }
}