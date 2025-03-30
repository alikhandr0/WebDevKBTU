from django.urls import path
from .views import ProductList, CategoryList
from django.http import JsonResponse
from .views import product_list, product_detail, category_list, category_detail, category_products

def api_root(request):
    return JsonResponse({
        "products": "/api/products/",
        "categories": "/api/categories/"
    })


urlpatterns = [
    path('', api_root, name='api-root'),
    path('products/', product_list),
    path('products/<int:id>/', product_detail),
    path('categories/', category_list),
    path('categories/<int:id>/', category_detail),
    path('categories/<int:id>/products/', category_products),
    path('products/', ProductList.as_view(), name='product-list'),
    path('categories/', CategoryList.as_view(), name='category-list'),

]