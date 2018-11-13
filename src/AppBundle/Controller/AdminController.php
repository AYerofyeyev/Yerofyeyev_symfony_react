<?php
/**
 * Created by PhpStorm.
 * User: ean
 * Date: 16.01.2018
 * Time: 16:50
 */

namespace AppBundle\Controller;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;

/**
 * Class AdminController
 * @package AppBundle\Controller
 */

class AdminController extends Controller
{
    public function indexAction()
    {
        return $this->render('AppBundle:Admin:index.html.twig');
    }
}