<?php

namespace AppBundle\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * Blog
 *
 * @ORM\Table(name="blog")
 * @ORM\Entity(repositoryClass="AppBundle\Repository\BlogRepository")
 */
class Blog
{
    /**
     * @var int
     *
     * @ORM\Column(name="id", type="integer")
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="AUTO")
     */
    private $id;

    /**
     * @var string
     *
     * @ORM\Column(name="image", type="string", length=60, nullable=true)
     */
    private $image;

    /**
     * @var string
     *
     * @ORM\Column(name="video", type="string", length=60, nullable=true)
     */
    private $video;

    /**
     * @var string
     *
     * @ORM\Column(name="title", type="string", length=60, nullable=true)
     */
    private $title;

    /**
     * @var \DateTime
     *
     * @ORM\Column(name="date", type="string", nullable=true)
     */
    private $date;

    /**
     * @var string
     *
     * @ORM\Column(name="text", type="text")
     */
    private $text;


    /**
     * Get id
     *
     * @return int
     */
    public function getId()
    {
        return $this->id;
    }

    /**
     * Set title
     *
     * @param string $title
     *
     * @return Blog
     */
    public function setImage($image)
    {
        $this->image = $image;

        return $this;
    }

    /**
     * Get title
     *
     * @return string
     */
    public function getImage()
    {
        return $this->image;
    }

/**
     * Set title
     *
     * @param string $title
     *
     * @return Blog
     */
    public function setVideo($video)
    {
        $this->video = $video;

        return $this;
    }

    /**
     * Get title
     *
     * @return string
     */
    public function getVideo()
    {
        return $this->video;
    }

/**
     * Set title
     *
     * @param string $title
     *
     * @return Blog
     */
    public function setTitle($title)
    {
        $this->title = $title;

        return $this;
    }

    /**
     * Get title
     *
     * @return string
     */
    public function getTitle()
    {
        return $this->title;
    }

    /**
     * Set date
     *
     * @param string $date
     *
     * @return Blog
     */
    public function setDate($date)
    {
        $this->date = $date;

        return $this;
    }

    /**
     * Get date
     *
     * @return string
     */
    public function getDate()
    {
        return $this->date;
    }

    /**
     * Set text
     *
     * @param string $text
     *
     * @return Blog
     */
    public function setText($text)
    {
        $this->text = $text;

        return $this;
    }

    /**
     * Get text
     *
     * @return string
     */
    public function getText()
    {
        return $this->text;
    }
}

