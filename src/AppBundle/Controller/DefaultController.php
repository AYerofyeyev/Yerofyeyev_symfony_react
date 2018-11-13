<?php

namespace AppBundle\Controller;

use AppBundle\Entity\Contactus;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;

class DefaultController extends Controller
{
    public function indexAction()
    {
        return $this->render('AppBundle:Default:index.html.twig');
    }

    public function contactusAction(Request $request)
    {
        $method = $request->getMethod();
        $contactus = (new Contactus())
            ->setName($request->get('name'))
            ->setEmail($request->get('email'))
            ->setPhone($request->get('phone'))
            ->setMessage($request->get('message'))
            ->setIpAddress($request->getClientIp())
        ;

        $validator = $this->get('validator');
        $errors = $validator->validate($contactus);

        if (count($errors) > 0){
//            $errorsString = (string) $errors;
            return new JsonResponse(['invalid' =>$errors[0].message]);
        }
        $em = $this
            ->getDoctrine()
            ->getManager();

        $em->persist($contactus);

        $em->flush();

//        $this->eMail([
//            'name' => $contactus->getName(),
//            'email' => $contactus->getEmail(),
//            'phone' => $contactus->getPhone(),
//            'message' => $contactus->getMessage(),
//            'ip' => $contactus->getIp(),
//            'date' => $contactus->getCreatedAt()
//        ]);

        return new JsonResponse(['result' => 'ok', 'Request method' => $method, 'e-mail' => $contactus->getEmail()]);

//        $form = $this->createForm(ContactusType::class, $feedback);
//        $form->handleRequest();
//        if ($form->isSubmitted() && $form->isValid()) {$em ... return $this->redirectToRoute('contact_us');}
    }

    public function menuAction()
    {
        return new JsonResponse([
                'Home',
                'About Us',
                'Service',
                'Blog',
                'Latest works'
        ]);
    }

    public function aboutusAction()
    {
        return new JsonResponse(['result' => 'ok']);
    }

    public function mailAction(array $mailData = [])
    {
        $message = (new \Swift_Message('Contact Us'))
            ->setFrom('mailer@lowlark.com')
            ->setTo(['shevel.v.v@gmail.com' => 'Vitalii', 'a.yerofyeyev@gmail.com' => 'Alex'])
            ->setBody(
                $this->renderView(
                // app/Resources/views/Emails/registration.html.twig
                    'AppBundle:Default:registration.html.twig',
                    [
                        'name' => $mailData['name'],
                        'email' => $mailData['email'],
                        'phone' => $mailData['phone'],
                        'message' => $mailData['message'],
                        'ip' => $mailData['ip'],
                        'date' => $mailData['date']
                    ]
                ),
                'text/html'
            )
            /*
             * If you also want to include a plaintext version of the message
            ->addPart(
                $this->renderView(
                    'Emails/registration.txt.twig',
                    array('name' => $name)
                ),
                'text/plain'
            )
            */
        ;

//        $mailer->send($message);

        // or, you can also fetch the mailer service this way
         $this->get('mailer')->send($message);

        return $this->render('AppBundle:Default:registration.html.twig');
    }
}
