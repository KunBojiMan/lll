<?php declare(strict_types=1);

namespace AsapRockyTheme\Storefront\Controller;

use Shopware\Core\System\SalesChannel\SalesChannelContext;
use Shopware\Storefront\Controller\StorefrontController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route(defaults={"_routeScope"={"storefront"}})
 */
class ExampleController extends StorefrontController
{
    /**
    * @Route("/example", name="frontend.example.example", methods={"GET"})
    */
    public function showExample(Request $request, SalesChannelContext $context): Response
    {
        return $this->renderStorefront('@AsapRockyTheme/storefront/page/content/index.html.twig', [
            'example' => 'Erwin Walter'
        ]);
    }
}
