import msRestAzure = require("./azure-arm-common");
import azureServiceClient = require("./AzureServiceClient");
import Model = require("./azureModels");
export declare class ComputeManagementClient extends azureServiceClient.ServiceClient {
    virtualMachines: VirtualMachines;
    virtualMachineExtensions: VirtualMachineExtensions;
    virtualMachineScaleSets: VirtualMachineScaleSets;
    constructor(credentials: msRestAzure.ApplicationTokenCredentials, subscriptionId: any, baseUri?: any, options?: any);
}
export declare class VirtualMachines {
    private client;
    constructor(client: any);
    list(resourceGroupName: any, options: any, callback: azureServiceClient.ApiCallback): void;
    get(resourceGroupName: any, vmName: any, options: any, callback: azureServiceClient.ApiCallback): void;
    restart(resourceGroupName: string, vmName: string, callback: azureServiceClient.ApiCallback): void;
    start(resourceGroupName: string, vmName: string, callback: azureServiceClient.ApiCallback): void;
    powerOff(resourceGroupName: string, vmName: string, callback: azureServiceClient.ApiCallback): void;
    deallocate(resourceGroupName: string, vmName: string, callback: azureServiceClient.ApiCallback): void;
    deleteMethod(resourceGroupName: string, vmName: string, callback: azureServiceClient.ApiCallback): void;
}
export declare class VirtualMachineExtensions {
    private client;
    constructor(client: ComputeManagementClient);
    list(resourceGroupName: string, resourceName: string, resourceType: Model.ComputeResourceType, options: any, callback: azureServiceClient.ApiCallback): void;
    get(resourceGroupName: string, resourceName: string, resourceType: Model.ComputeResourceType, vmExtensionName: string, options: any, callback: azureServiceClient.ApiCallback): void;
    createOrUpdate(resourceGroupName: string, resourceName: string, resourceType: Model.ComputeResourceType, vmExtensionName: string, extensionParameters: any, callback: azureServiceClient.ApiCallback): void;
    deleteMethod(resourceGroupName: string, resourceName: string, resourceType: Model.ComputeResourceType, vmExtensionName: string, callback: azureServiceClient.ApiCallback): void;
}
export declare class VirtualMachineScaleSets {
    private client;
    constructor(client: any);
    list(options: any, callback: azureServiceClient.ApiCallback): void;
    get(resourceGroupName: string, vmssName: string, options: any, callback: azureServiceClient.ApiCallback): void;
    updateImage(resourceGroupName: string, vmssName: string, imageUrl: string, options: any, callback: azureServiceClient.ApiCallback): void;
}
export declare function getComputeResourceTypeString(resourceType: Model.ComputeResourceType): string;
