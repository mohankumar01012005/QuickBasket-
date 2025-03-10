import { useLocalSearchParams , Stack} from "expo-router";
import { View } from "react-native";
import products from "@/assets/products.json";
import { VStack } from "@/components/ui/vstack";
import { Text } from "@/components/ui/text";
import { Image } from "@/components/ui/image";
import { Heading } from "@/components/ui/heading";
import { Card } from "@/components/ui/card";
import { Box } from "@/components/ui/box";
import { Button, ButtonText } from "@/components/ui/button";

export default function ProductDetailScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return <Text className="text-center mt-10">Product details not found for ID: {id}</Text>;
  }

  return (
    <View className="flex-1 items-center justify-center p-4 bg-gray-100">
      <Stack.Screen  options={{title:product.name}}></Stack.Screen>

     <Card className="w-full h-[95vh] max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl xl:max-w-3xl sm:h-auto sm:min-h-[70vh] p-6 rounded-lg bg-white flex justify-between">

        {/* Image */}
        <Image
          source={{ uri: product.image }}
          className="h-[40%] w-full rounded-md"
          alt="image"
          resizeMode="contain"
        />

        {/* Product Details */}
        <VStack className="h-[35%] justify-center">
          <Text className="text-4xl  font-semibold text-typography-700">
            {product.name}
          </Text>
          <Heading size="3xl" className="mt-2">
            ₹{product.price}
          </Heading>
          <Text size="lg" className="pt-6 text-gray-600">
            {product.description}
          </Text>
        </VStack>

        {/* Buttons */}
        <Box className="h-[15%] flex flex-row space-x-3">
          <Button className="flex-1 px-4 py-2">
            <ButtonText size="sm">Add to cart</ButtonText>
          </Button>
          <Button variant="outline" className="flex-1 px-4 py-2 border-outline-300">
            <ButtonText size="sm" className="text-typography-600">Wishlist</ButtonText>
          </Button>
        </Box>
      </Card>
    </View>
  );
}
